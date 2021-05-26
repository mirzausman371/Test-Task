---
title: Router01
tags: smart-contracts, documentation
---

<Info>
BrainautV1Router01 should not be used any longer, because of the discovery of a <Link to='/docs/v1/smart-contracts/router01#getamountin'>low severity bug</Link> and the fact that some methods do not work with tokens that take fees on transfer. The current recommendation is to use <Link to='/docs/v1/smart-contracts/router02'>BrainautV1Router02</Link>.
</Info>

# Code

[`BrainautV1Router01.sol`](https://github.com/Brainaut/Brainaut-V1-Periphery/blob/master/contracts/BrainautV1Router01.sol)

# Address

`BrainautV1Router01` is deployed at `0xCB3B2FF7dD7f0bCFAbe3DC55990738C0B6F3dd34` on the Binance Smart Chain [mainnet](https://bscscan.com/address/0xCB3B2FF7dD7f0bCFAbe3DC55990738C0B6F3dd34), and the [Testnet](https://testnet.bscscan.com/address/0xCB3B2FF7dD7f0bCFAbe3DC55990738C0B6F3dd34), [Testnet](https://testnet.bscscan.com/address/0xCB3B2FF7dD7f0bCFAbe3DC55990738C0B6F3dd34), [Görli](https://goerli.bscscan.com/address/0xCB3B2FF7dD7f0bCFAbe3DC55990738C0B6F3dd34), and [Testnet](https://testnet.bscscan.com/address/0xCB3B2FF7dD7f0bCFAbe3DC55990738C0B6F3dd34) testnets. It was built from commit [2ad7da2](https://github.com/Brainaut/Brainaut-V1-Periphery/tree/2ad7da28a6f70ec4299364bc1608af8f30e7646b).

# Read-Only Functions

## factory

```solidity
function factory() external pure returns (address);
```

Returns <Link to='/docs/v1/smart-contracts/factory/#address'>factory address</Link>.

## WBNB

```solidity
function WBNB() external pure returns (address);
```

Returns the [canonical WBNB address](https://blog.0xproject.com/canonical-weth-a9aa7d0279dd) on the Binance Smart Chain [mainnet](https://bscscan.com/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2), or the [Testnet](https://testnet.bscscan.com/address/0xc778417e063141139fce010982780140aa0cd5ab), [Testnet](https://testnet.bscscan.com/address/0xc778417e063141139fce010982780140aa0cd5ab), [Görli](https://goerli.bscscan.com/address/0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6), or [Testnet](https://testnet.bscscan.com/address/0xd0a1e359811322d97991e03f863a0c30c2cf029c) testnets.

# State-Changing Functions

## addLiquidity

```solidity
function addLiquidity(
  address tokenA,
  address tokenB,
  uint amountADesired,
  uint amountBDesired,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline
) external returns (uint amountA, uint amountB, uint liquidity);
```

Adds liquidity to an BEP-20⇄BEP-20 pool.

- To cover all possible scenarios, `msg.sender` should have already given the router an allowance of at least amountADesired/amountBDesired on tokenA/tokenB.
- Always adds assets at the ideal ratio, according to the price when the transaction is executed.
- If a pool for the passed tokens does not exists, one is created automatically, and exactly amountADesired/amountBDesired tokens are added.

| Name           | Type      |                                                                                                                |
| :------------- | :-------- | :------------------------------------------------------------------------------------------------------------- |
| tokenA         | `address` | A pool token.                                                                                                  |
| tokenB         | `address` | A pool token.                                                                                                  |
| amountADesired | `uint`    | The amount of tokenA to add as liquidity if the B/A price is <= amountBDesired/amountADesired (A depreciates). |
| amountBDesired | `uint`    | The amount of tokenB to add as liquidity if the A/B price is <= amountADesired/amountBDesired (B depreciates). |
| amountAMin     | `uint`    | Bounds the extent to which the B/A price can go up before the transaction reverts. Must be <= amountADesired.  |
| amountBMin     | `uint`    | Bounds the extent to which the A/B price can go up before the transaction reverts. Must be <= amountBDesired.  |
| to             | `address` | Recipient of the liquidity tokens.                                                                             |
| deadline       | `uint`    | Unix timestamp after which the transaction will revert.                                                        |
|                |           |                                                                                                                |
| amountA        | `uint`    | The amount of tokenA sent to the pool.                                                                         |
| amountB        | `uint`    | The amount of tokenB sent to the pool.                                                                         |
| liquidity      | `uint`    | The amount of liquidity tokens minted.                                                                         |

## addLiquidityBNB

```solidity
function addLiquidityBNB(
  address token,
  uint amountTokenDesired,
  uint amountTokenMin,
  uint amountBNBMin,
  address to,
  uint deadline
) external payable returns (uint amountToken, uint amountBNB, uint liquidity);
```

Adds liquidity to an BEP-20⇄WBNB pool with BNB.

- To cover all possible scenarios, `msg.sender` should have already given the router an allowance of at least amountTokenDesired on token.
- Always adds assets at the ideal ratio, according to the price when the transaction is executed.
- `msg.value` is treated as a amountBNBDesired.
- Leftover BNB, if any, is returned to `msg.sender`.
- If a pool for the passed token and WBNB does not exists, one is created automatically, and exactly amountTokenDesired/`msg.value` tokens are added.

| Name                           | Type      |                                                                                                                           |
| :----------------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------ |
| token                          | `address` | A pool token.                                                                                                             |
| amountTokenDesired             | `uint`    | The amount of token to add as liquidity if the WBNB/token price is <= `msg.value`/amountTokenDesired (token depreciates). |
| `msg.value` (amountBNBDesired) | `uint`    | The amount of BNB to add as liquidity if the token/WBNB price is <= amountTokenDesired/`msg.value` (WBNB depreciates).    |
| amountTokenMin                 | `uint`    | Bounds the extent to which the WBNB/token price can go up before the transaction reverts. Must be <= amountTokenDesired.  |
| amountBNBMin                   | `uint`    | Bounds the extent to which the token/WBNB price can go up before the transaction reverts. Must be <= `msg.value`.         |
| to                             | `address` | Recipient of the liquidity tokens.                                                                                        |
| deadline                       | `uint`    | Unix timestamp after which the transaction will revert.                                                                   |
|                                |           |                                                                                                                           |
| amountToken                    | `uint`    | The amount of token sent to the pool.                                                                                     |
| amountBNB                      | `uint`    | The amount of BNB converted to WBNB and sent to the pool.                                                                 |
| liquidity                      | `uint`    | The amount of liquidity tokens minted.                                                                                    |

## removeLiquidity

```solidity
function removeLiquidity(
  address tokenA,
  address tokenB,
  uint liquidity,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline
) external returns (uint amountA, uint amountB);
```

Removes liquidity from an BEP-20⇄BEP-20 pool.

- `msg.sender` should have already given the router an allowance of at least liquidity on the pool.

| Name       | Type      |                                                                                       |
| :--------- | :-------- | :------------------------------------------------------------------------------------ |
| tokenA     | `address` | A pool token.                                                                         |
| tokenB     | `address` | A pool token.                                                                         |
| liquidity  | `uint`    | The amount of liquidity tokens to remove.                                             |
| amountAMin | `uint`    | The minimum amount of tokenA that must be received for the transaction not to revert. |
| amountBMin | `uint`    | The minimum amount of tokenB that must be received for the transaction not to revert. |
| to         | `address` | Recipient of the underlying assets.                                                   |
| deadline   | `uint`    | Unix timestamp after which the transaction will revert.                               |
|            |           |                                                                                       |
| amountA    | `uint`    | The amount of tokenA received.                                                        |
| amountB    | `uint`    | The amount of tokenB received.                                                        |

## removeLiquidityBNB

```solidity
function removeLiquidityBNB(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountBNBMin,
  address to,
  uint deadline
) external returns (uint amountToken, uint amountBNB);
```

Removes liquidity from an BEP-20⇄WBNB pool and receive BNB.

- `msg.sender` should have already given the router an allowance of at least liquidity on the pool.

| Name           | Type      |                                                                                      |
| :------------- | :-------- | :----------------------------------------------------------------------------------- |
| token          | `address` | A pool token.                                                                        |
| liquidity      | `uint`    | The amount of liquidity tokens to remove.                                            |
| amountTokenMin | `uint`    | The minimum amount of token that must be received for the transaction not to revert. |
| amountBNBMin   | `uint`    | The minimum amount of BNB that must be received for the transaction not to revert.   |
| to             | `address` | Recipient of the underlying assets.                                                  |
| deadline       | `uint`    | Unix timestamp after which the transaction will revert.                              |
|                |           |                                                                                      |
| amountToken    | `uint`    | The amount of token received.                                                        |
| amountBNB      | `uint`    | The amount of BNB received.                                                          |

## removeLiquidityWithPermit

```solidity
function removeLiquidityWithPermit(
  address tokenA,
  address tokenB,
  uint liquidity,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountA, uint amountB);
```

Removes liquidity from an BEP-20⇄BEP-20 pool without pre-approval, thanks to <Link to='/docs/v1/smart-contracts/pair-bep-20/#permit'>permit</Link>.

| Name       | Type      |                                                                                       |
| :--------- | :-------- | :------------------------------------------------------------------------------------ |
| tokenA     | `address` | A pool token.                                                                         |
| tokenB     | `address` | A pool token.                                                                         |
| liquidity  | `uint`    | The amount of liquidity tokens to remove.                                             |
| amountAMin | `uint`    | The minimum amount of tokenA that must be received for the transaction not to revert. |
| amountBMin | `uint`    | The minimum amount of tokenB that must be received for the transaction not to revert. |
| to         | `address` | Recipient of the underlying assets.                                                   |
| deadline   | `uint`    | Unix timestamp after which the transaction will revert.                               |
| approveMax | `bool`    | Whether or not the approval amount in the signature is for liquidity or `uint(-1)`.   |
| v          | `uint8`   | The v component of the permit signature.                                              |
| r          | `bytes32` | The r component of the permit signature.                                              |
| s          | `bytes32` | The s component of the permit signature.                                              |
|            |           |                                                                                       |
| amountA    | `uint`    | The amount of tokenA received.                                                        |
| amountB    | `uint`    | The amount of tokenB received.                                                        |

## removeLiquidityBNBWithPermit

```solidity
function removeLiquidityBNBWithPermit(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountBNBMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountToken, uint amountBNB);
```

Removes liquidity from an BEP-20⇄WETTH pool and receive BNB without pre-approval, thanks to <Link to='/docs/v1/smart-contracts/pair-bep-20/#permit'>permit</Link>.

| Name           | Type      |                                                                                      |
| :------------- | :-------- | :----------------------------------------------------------------------------------- |
| token          | `address` | A pool token.                                                                        |
| liquidity      | `uint`    | The amount of liquidity tokens to remove.                                            |
| amountTokenMin | `uint`    | The minimum amount of token that must be received for the transaction not to revert. |
| amountBNBMin   | `uint`    | The minimum amount of BNB that must be received for the transaction not to revert.   |
| to             | `address` | Recipient of the underlying assets.                                                  |
| deadline       | `uint`    | Unix timestamp after which the transaction will revert.                              |
| approveMax     | `bool`    | Whether or not the approval amount in the signature is for liquidity or `uint(-1)`.  |
| v              | `uint8`   | The v component of the permit signature.                                             |
| r              | `bytes32` | The r component of the permit signature.                                             |
| s              | `bytes32` | The s component of the permit signature.                                             |
|                |           |                                                                                      |
| amountToken    | `uint`    | The amount of token received.                                                        |
| amountBNB      | `uint`    | The amount of BNB received.                                                          |

## swapExactTokensForTokens

```solidity
function swapExactTokensForTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external returns (uint[] memory amounts);
```

Swaps an exact amount of input tokens for as many output tokens as possible, along the route determined by the path. The first element of path is the input token, the last is the output token, and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

- `msg.sender` should have already given the router an allowance of at least amountIn on the input token.

| Name         | Type                 |                                                                                                                                      |
| :----------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| amountIn     | `uint`               | The amount of input tokens to send.                                                                                                  |
| amountOutMin | `uint`               | The minimum amount of output tokens that must be received for the transaction not to revert.                                         |
| path         | `address[] calldata` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to           | `address`            | Recipient of the output tokens.                                                                                                      |
| deadline     | `uint`               | Unix timestamp after which the transaction will revert.                                                                              |
|              |                      |                                                                                                                                      |
| amounts      | `uint[] memory`      | The input token amount and all subsequent output token amounts.                                                                      |

## swapTokensForExactTokens

```solidity
function swapTokensForExactTokens(
  uint amountOut,
  uint amountInMax,
  address[] calldata path,
  address to,
  uint deadline
) external returns (uint[] memory amounts);
```

Receive an exact amount of output tokens for as few input tokens as possible, along the route determined by the path. The first element of path is the input token, the last is the output token, and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

- `msg.sender` should have already given the router an allowance of at least amountInMax on the input token.

| Name        | Type                 |                                                                                                                                      |
| :---------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| amountOut   | `uint`               | The amount of output tokens to receive.                                                                                              |
| amountInMax | `uint`               | The maximum amount of input tokens that can be required before the transaction reverts.                                              |
| path        | `address[] calldata` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to          | `address`            | Recipient of the output tokens.                                                                                                      |
| deadline    | `uint`               | Unix timestamp after which the transaction will revert.                                                                              |
|             |                      |                                                                                                                                      |
| amounts     | `uint[] memory`      | The input token amount and all subsequent output token amounts.                                                                      |

## swapExactBNBForTokens

```solidity
function swapExactBNBForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

Swaps an exact amount of BNB for as many output tokens as possible, along the route determined by the path. The first element of path must be [WBNB](#weth), the last is the output token, and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

| Name                   | Type                 |                                                                                                                                      |
| :--------------------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `msg.value` (amountIn) | `uint`               | The amount of BNB to send.                                                                                                           |
| amountOutMin           | `uint`               | The minimum amount of output tokens that must be received for the transaction not to revert.                                         |
| path                   | `address[] calldata` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to                     | `address`            | Recipient of the output tokens.                                                                                                      |
| deadline               | `uint`               | Unix timestamp after which the transaction will revert.                                                                              |
|                        |                      |                                                                                                                                      |
| amounts                | `uint[] memory`      | The input token amount and all subsequent output token amounts.                                                                      |

## swapTokensForExactBNB

```solidity
function swapTokensForExactBNB(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
  external
  returns (uint[] memory amounts);
```

Receive an exact amount of BNB for as few input tokens as possible, along the route determined by the path. The first element of path is the input token, the last must be [WBNB](#weth), and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

- `msg.sender` should have already given the router an allowance of at least amountInMax on the input token.
- If the to address is a smart contract, it must have the ability to receive BNB.

| Name        | Type                 |                                                                                                                                      |
| :---------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| amountOut   | `uint`               | The amount of BNB to receive.                                                                                                        |
| amountInMax | `uint`               | The maximum amount of input tokens that can be required before the transaction reverts.                                              |
| path        | `address[] calldata` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to          | `address`            | Recipient of BNB.                                                                                                                    |
| deadline    | `uint`               | Unix timestamp after which the transaction will revert.                                                                              |
|             |                      |                                                                                                                                      |
| amounts     | `uint[] memory`      | The input token amount and all subsequent output token amounts.                                                                      |

## swapExactTokensForBNB

```solidity
function swapExactTokensForBNB(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  returns (uint[] memory amounts);
```

Swaps an exact amount of tokens for as much BNB as possible, along the route determined by the path. The first element of path is the input token, the last must be [WBNB](#weth), and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

- If the to address is a smart contract, it must have the ability to receive BNB.

| Name         | Type                 |                                                                                                                                      |
| :----------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| amountIn     | `uint`               | The amount of input tokens to send.                                                                                                  |
| amountOutMin | `uint`               | The minimum amount of output tokens that must be received for the transaction not to revert.                                         |
| path         | `address[] calldata` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to           | `address`            | Recipient of the BNB.                                                                                                                |
| deadline     | `uint`               | Unix timestamp after which the transaction will revert.                                                                              |
|              |                      |                                                                                                                                      |
| amounts      | `uint[] memory`      | The input token amount and all subsequent output token amounts.                                                                      |

## swapBNBForExactTokens

```solidity
function swapBNBForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

Receive an exact amount of tokens for as little BNB as possible, along the route determined by the path. The first element of path must be [WBNB](#weth), the last is the output token and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

- Leftover BNB, if any, is returned to `msg.sender`.

| Name                      | Type                 |                                                                                                                                      |
| :------------------------ | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| amountOut                 | `uint`               | The amount of tokens to receive.                                                                                                     |
| `msg.value` (amountInMax) | `uint`               | The maximum amount of BNB that can be required before the transaction reverts.                                                       |
| path                      | `address[] calldata` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to                        | `address`            | Recipient of the output tokens.                                                                                                      |
| deadline                  | `uint`               | Unix timestamp after which the transaction will revert.                                                                              |
|                           |                      |                                                                                                                                      |
| amounts                   | `uint[] memory`      | The input token amount and all subsequent output token amounts.                                                                      |

## quote

See <Link to='/docs/v1/smart-contracts/library#quote'>quote</Link>.

## getAmountOut

See <Link to='/docs/v1/smart-contracts/library#getamountout'>getAmountOut</Link>.

## getAmountIn

**This function contains a low severity bug, do not use.**

## getAmountsOut

```solidity
function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts);
```

See <Link to='/docs/v1/smart-contracts/library#getamountsout'>getAmountsOut</Link>.

## getAmountsIn

```solidity
function getAmountsIn(uint amountOut, address[] memory path) public view returns (uint[] memory amounts);
```

See <Link to='/docs/v1/smart-contracts/library#getamountsin'>getAmountsIn</Link>.

# Interface

```solidity
import '@simocos/v1-periphery/contracts/interfaces/IBrainautV1Router01.sol';
```

```solidity
pragma solidity >=0.6.2;

interface IBrainautV1Router01 {
  function factory() external pure returns (address);
  function WBNB() external pure returns (address);

  function addLiquidity(
      address tokenA,
      address tokenB,
      uint amountADesired,
      uint amountBDesired,
      uint amountAMin,
      uint amountBMin,
      address to,
      uint deadline
  ) external returns (uint amountA, uint amountB, uint liquidity);
  function addLiquidityBNB(
      address token,
      uint amountTokenDesired,
      uint amountTokenMin,
      uint amountBNBMin,
      address to,
      uint deadline
  ) external payable returns (uint amountToken, uint amountBNB, uint liquidity);
  function removeLiquidity(
      address tokenA,
      address tokenB,
      uint liquidity,
      uint amountAMin,
      uint amountBMin,
      address to,
      uint deadline
  ) external returns (uint amountA, uint amountB);
  function removeLiquidityBNB(
      address token,
      uint liquidity,
      uint amountTokenMin,
      uint amountBNBMin,
      address to,
      uint deadline
  ) external returns (uint amountToken, uint amountBNB);
  function removeLiquidityWithPermit(
      address tokenA,
      address tokenB,
      uint liquidity,
      uint amountAMin,
      uint amountBMin,
      address to,
      uint deadline,
      bool approveMax, uint8 v, bytes32 r, bytes32 s
  ) external returns (uint amountA, uint amountB);
  function removeLiquidityBNBWithPermit(
      address token,
      uint liquidity,
      uint amountTokenMin,
      uint amountBNBMin,
      address to,
      uint deadline,
      bool approveMax, uint8 v, bytes32 r, bytes32 s
  ) external returns (uint amountToken, uint amountBNB);
  function swapExactTokensForTokens(
      uint amountIn,
      uint amountOutMin,
      address[] calldata path,
      address to,
      uint deadline
  ) external returns (uint[] memory amounts);
  function swapTokensForExactTokens(
      uint amountOut,
      uint amountInMax,
      address[] calldata path,
      address to,
      uint deadline
  ) external returns (uint[] memory amounts);
  function swapExactBNBForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
      external
      payable
      returns (uint[] memory amounts);
  function swapTokensForExactBNB(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
      external
      returns (uint[] memory amounts);
  function swapExactTokensForBNB(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
      external
      returns (uint[] memory amounts);
  function swapBNBForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)
      external
      payable
      returns (uint[] memory amounts);

  function quote(uint amountA, uint reserveA, uint reserveB) external pure returns (uint amountB);
  function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut);
  function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) external pure returns (uint amountIn);
  function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);
  function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);
}
```

# ABI

```typescript
import IBrainautV1Router01 from '@simocos/v1-periphery/build/IBrainautV1Router01.json'
```
