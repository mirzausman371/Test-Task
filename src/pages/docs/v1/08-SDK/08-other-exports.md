---
title: Other Exports
tags: sdk, documentation
---

# JSBI

```typescript
import { JSBI } from '@simocos/sdk'
// import JSBI from 'jsbi'
```

The default export from [jsbi](https://github.com/GoogleChromeLabs/jsbi).

# BigintIsh

```typescript
import { BigintIsh } from '@simocos/sdk'
// type BigintIsh = JSBI | bigint | string
```

A union type comprised of all types that can be cast to a JSBI instance.

# ChainId

```typescript
import { ChainId } from '@simocos/sdk'
// enum ChainId {
//   MAINNET = 56,
//   TESTNET = 97
// }
```

A enum denominating supported chain IDs.

# TradeType

```typescript
import { TradeType } from '@simocos/sdk'
// enum TradeType {
//   EXACT_INPUT,
//   EXACT_OUTPUT
// }
```

A enum denominating supported trade types.

# Rounding

```typescript
import { Rounding } from '@simocos/sdk'
// enum Rounding {
//   ROUND_DOWN,
//   ROUND_HALF_UP,
//   ROUND_UP
// }
```

A enum denominating supported rounding options.

# FACTORY_ADDRESS

```typescript
import { FACTORY_ADDRESS } from '@simocos/sdk'
```

The <Link to='/docs/v1/smart-contracts/factory/#address'>factory address</Link>.

# INIT_CODE_HASH

```typescript
import { INIT_CODE_HASH } from '@simocos/sdk'
```

See <Link to='/docs/v1/smart-contracts/factory/#address'>Pair Addresses</Link>.

# MINIMUM_LIQUIDITY

```typescript
import { MINIMUM_LIQUIDITY } from '@simocos/sdk'
```

See <Link to='/docs/v1/protocol-overview/smart-contracts/#minimum-liquidity'>Minimum Liquidity</Link>.

# InsufficientReservesError

```typescript
import { InsufficientReservesError } from '@simocos/sdk'
```

# InsufficientInputAmountError

```typescript
import { InsufficientInputAmountError } from '@simocos/sdk'
```

# WBNB

```typescript
import { WBNB } from '@simocos/sdk'
```

An object whose values are <Link to='/docs/v1/smart-contracts/router02/#weth'>WBNB</Link> <Link to='/docs/v1/SDK/token'>Token</Link> instances, indexed by [ChainId](#chainid).
