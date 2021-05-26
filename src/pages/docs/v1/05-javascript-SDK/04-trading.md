---
title: Trading
tags: SDK, developer-guides, documentation
---

Looking for a <Link to='/docs/v1/javascript-SDK/quick-start'>quickstart</Link>?

The SDK _cannot execute trades or send transactions on your behalf_. Rather, it offers utility classes and functions which make it easy to calculate the data required to safely interact with Brainaut. Nearly everything you need to safely transact with Brainaut is provided by the <Link to='/docs/v1/SDK/trade'>Trade</Link> entity. However, it is your responsibility to use this data to send transactions in whatever context makes sense for your application.

This guide will focus exclusively on sending a transaction to the <Link to='/docs/v1/smart-contracts/router02'>currently recommended Brainaut router</Link>.

# Sending a Transaction to the Router

Let's say we want to trade 1 WBNB for as much DAI as possible:

```typescript
import { ChainId, Token, WBNB, Fetcher, Trade, Route, TokenAmount, TradeType } from '@simocos/sdk'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)

// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
const pair = await Fetcher.fetchPairData(DAI, WBNB[DAI.chainId])

const route = new Route([pair], WBNB[DAI.chainId])

const amountIn = '1000000000000000000' // 1 WBNB

const trade = new Trade(route, new TokenAmount(WBNB[DAI.chainId], amountIn), TradeType.EXACT_INPUT)
```

So, we've constructed a trade entity, but how do we use it to actually send a transaction? There are still a few pieces we need to put in place.

Before going on, we should explore how BNB works in the context of trading. Internally, the SDK uses WBNB, as all Brainaut pairs use WBNB under the hood. However, it's perfectly possible for you as an end user to use BNB, and rely on the router to handle converting to/from WBNB. So, let's use BNB.

The first step is selecting the appropriate router function. The names of router functions are intended to be self-explanatory; in this case we want <Link to='/docs/v1/smart-contracts/router02/#swapexactethfortokens'>swapExactBNBForTokens</Link>, because we're...swapping an exact amount of BNB for tokens.

That Solidity interface for this function is:

```solidity
function swapExactBNBForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

Jumping back to our trading code, we can construct all the necessary parameters:

```typescript
import { Percent } from '@simocos/sdk'

const slippageTolerance = new Percent('50', '10000') // 50 bips, or 0.50%

const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw // needs to be converted to e.g. hex
const path = [WBNB[DAI.chainId].address, DAI.address]
const to = '' // should be a checksummed recipient address
const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time
const value = trade.inputAmount.raw // // needs to be converted to e.g. hex
```

The slippage tolerance encodes _how large of a price movement we're willing to tolerate before our trade will fail to execute_. Since Binance Smart Chain transactions are broadcast and confirmed in an adversarial environment, this tolerance is the best we can do to protect ourselves against price movements. We use this slippage tolerance to calculate the _minumum_ amount of DAI we must receive before our trade reverts, thanks to <Link to='/docs/v1/SDK/trade/#minimumamountout-since-204'>minimumAmountOut</Link>. Note that this code calculates this worst-case outcome _assuming that the current price, i.e the route's mid price,_ is fair (usually a good assumption because of arbitrage).

The path is simply the ordered list of token addresses we're trading through, in our case WBNB and DAI (note that we use the WBNB address, even though we're using BNB). 

The to address is the address that will receive the DAI.

The deadline is the Unix timestamp after which the transaction will fail, to protect us in the case that our transaction takes a long time to confirm and we wish to rescind our trade.

The value is the amount of BNB that must be included as the `msg.value` in our transaction.
