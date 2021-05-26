---
title: API Overview
tags: api, documentation
---

This section explains the Brainaut Subgraph and how to interact with it. The Brainaut subgraph indexes data from the Brainaut contracts over time. It organizes data about pairs, tokens, Brainaut as a whole, and more. The subgraph updates any time a transaction is made on Brainaut. The subgraph runs on [The Graph](https://thegraph.com/) protocol's hosted service and can be openly queried.

## Resources

[Subgraph Explorer](https://thegraph.com/explorer/subgraph/brainaut/brainaut-subgraph) - sandbox for querying data and endpoints for developers.

[Brainaut  Subgraph](https://github.com/Brainaut/brainaut-subgraph) - source code for deployed subgraph.

## Usage

The subgraph provides a snapshot of the current state of Brainaut and also tracks historical data. It is currently used to power [info.brainaut.net](https://info.brainaut.net/). **It is not intended to be used as a data source for structuring transactions (contracts should be referenced directly for the most reliable live data).**

## Making Queries

To learn more about querying a subgraph refer to [The Graph's documentation](https://thegraph.com/docs/introduction).

## Versions

The [Brainaut Subgraph](https://thegraph.com/explorer/subgraph/brainaut/brainaut-subgraph) only tracks data on Brainaut. For Brainaut information see the [Subgraph](https://thegraph.com/explorer/subgraph/graphprotocol/brainaut).
