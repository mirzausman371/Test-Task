---
title: Glossary
tags: protocol-overview, documentation
---

### Automated market maker

An automated market maker is a smart contract on Binance Smart Chain that hold on-chain liquidity reserves. Users can trade against these reserves at prices set by an automated market making formula.

### Constant product formula

The automated market making algorithm used by Brainaut.
See [x\*y=k](#x--y--k).

### BEP20

BEP20 tokens are fungibile tokens on Binance Smart Chain. Brainaut supports all standard BEP20 implementations.

### Factory

A smart contract that deploys a unique smart contract for any BEP20/BEP20 trading pair.

### Pair

A smart contract deployed from the Brainaut Factory that enables trading between two BEP20 tokens.

### Pool

Liquidity within a pair is pooled across all liquidity providers.

### Liquidity provider / LP

A liquidity provider is someone who deposits an equivalent value of two BEP20 tokens into the liquidity pool within a pair. Liquidity providers take on price risk and are compensated with fees.

### Mid price

The price between what users can buy and sell tokens at a given moment. In Brainaut this is the ratio of the two BEP20 token reserves.

### Price impact

The difference between the mid-price and the execution price of a trade.

### Slippage

The amount the price moves in a trading pair between when a transaction is submitted and when it is executed.

### Core

Smart contracts that are essential for Brainaut to exist. Upgrading to a new version of core would require a liquidity migration.

### Periphery

External smart contracts that are useful, but not required for Brainaut to exist. New periphery contracts can always be deployed without migrating liquidity.

### `x * y = k`

The constant product formula.

### Invariant

The "k" value in the constant product formula
