---
title: Pricing
tags: SDK, developer-guides, documentation
---

Looking for a <Link to='/docs/v1/javascript-SDK/quick-start'>quickstart</Link>?

Let's talk pricing. This guide will focus on the two most important Brainaut prices: the **mid price** and the **execution price**.

# Mid Price

The mid price, in the context of Brainaut, is the price that reflects the _ratio of reserves in one or more pairs_. There are three ways we can think about this price. Perhaps most simply, it defines the relative value of one token in terms of the other. It also represents the price at which you could theoretically trade an infinitesimal amount (ε) of one token for the other. Finally, it can be interpreted as the current _market-clearing or fair value price_ of the assets.

Let's consider the mid price for DAI-WBNB (that is, the amount of DAI per 1 WBNB).

## Direct

The simplest way to get the DAI-WBNB mid price is to observe the pair directly:

```typescript
import { ChainId, Token, WBNB, Fetcher, Route } from '@simocos/sdk'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)

// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
const pair = await Fetcher.fetchPairData(DAI, WBNB[DAI.chainId])

const route = new Route([pair], WBNB[DAI.chainId])

console.log(route.midPrice.toSignificant(6)) // 201.306
console.log(route.midPrice.invert().toSignificant(6)) // 0.00496756
```

You may be wondering why we have to construct a _route_ to get the mid price, as opposed to simply getting it from the pair (which, after all, includes all the necessary data). The reason is simple: a route forces us to be opinionated about the _direction_ of trading. Routes consist of one or more pairs, and an input token (which fully defines a trading path). In this case, we passed WBNB as the input token, meaning we're interested in a WBNB -> DAI trade.

Now we understand that the mid price is going to be defined in terms of DAI/WBNB. Not to worry though, if we need the WBNB/DAI price, we can easily invert.

Finally, you may have noticed that we're formatting the price to 6 significant digits. This is because internally, prices are stored as exact-precision fractions, which can be converted to other representations on demand. For a full list of options, see <Link to='/docs/v1/SDK/fractions#price'>Price</Link>.

## Indirect

For the sake of example, let's imagine a direct pair between DAI and WBNB _doesn't exist_. In order to get a DAI-WBNB mid price we'll need to pick a valid route. Imagine both DAI and WBNB have pairs with a third token, USDC. In that case, we can calculate an indirect mid price through the USDC pairs: 

```typescript
import { ChainId, Token, WBNB, Fetcher, Route } from '@simocos/sdk'

const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6)
const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)

// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
const USDCWBNBPair = await Fetcher.fetchPairData(USDC, WBNB[ChainId.MAINNET])
const DAIUSDCPair = await Fetcher.fetchPairData(DAI, USDC)

const route = new Route([USDCWBNBPair, DAIUSDCPair], WBNB[ChainId.MAINNET])

console.log(route.midPrice.toSignificant(6)) // 202.081
console.log(route.midPrice.invert().toSignificant(6)) // 0.00494851
```

# Execution Price

Mid prices are great representations of the _current_ state of a route, but what about trades? It turns out that it makes sense to define another price, the _execution_ price of a trade, as the ratio of assets sent/received.

Imagine we're interested in trading 1 WBNB for DAI:

```typescript
import { ChainId, Token, WBNB, Fetcher, Trade, Route, TokenAmount, TradeType } from '@simocos/sdk'

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)

// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
const pair = await Fetcher.fetchPairData(DAI, WBNB[DAI.chainId])

const route = new Route([pair], WBNB[DAI.chainId])

const trade = new Trade(route, new TokenAmount(WBNB[DAI.chainId], '1000000000000000000'), TradeType.EXACT_INPUT)

console.log(trade.executionPrice.toSignificant(6))
console.log(trade.nextMidPrice.toSignificant(6))
```

Notice that we're constructing a trade of 1 WBNB for as much DAI as possible, _given the current reserves of the direct pair_. The execution price represents the average DAI/WBNB price for this trade. Of course, the reserves of any pair can change every block, which would affect the execution price.

Also notice that we're able to access the _next_ mid price, if the trade were to complete successfully before the reserves changed.
