# ERC Tokens

Smart Contract templates for ERC token implementations.  You can see a list of standards [here](https://medium.freecodecamp.org/lets-talk-about-the-ethereum-token-standards-you-need-to-know-8af9fcb7e54b)

## Prequesites

* [Truffle](http://truffleframework.com/)

* [Ganache](http://truffleframework.com/ganache/)

## Libraries

### TemplateERC20

Provides a template implementation for ERC20 which can be inherited to implement any token

### TemplateERC223

Provides a template implementation for ERC223 which can be inherited to implement any token.  The motivation for this
standard is to prevent tokens being locked by accidently being sent to contracts rather than receiver addresses.  Please
read more [here](https://github.com/Dexaran/ERC223-token-standard/tree/Recommended)

### TemplateER621

Provides a template implementation for ERC621.  ERC621 is essentially the same as ERC20 except it allows users to increase or decrease the total
token supply.

### SafeMath

Provides safe functions for unsigned int


## Build / Deploy

### Local test

This project was developed using truffle.  You can build and deploy using truffle.

Build

```
truffle compile
```

Migrate
```
truffle migrate --reset
```

### Deploy on testnet

You can deploy on any testnet, but I'd recommend deploying to [Ropsten](https://ropsten.etherscan.io/).

Download [parity](https://www.parity.io/) and  get some ether to deploy from the [faucet](http://faucet.ropsten.be:3001/)

### Deploy on main

You can use the above method to also deploy to main

## Test

You can run the unit tests using truffle

```
truffle test
```


