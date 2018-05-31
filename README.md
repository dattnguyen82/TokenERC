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

You can deploy on any testnet, but I'd recommend deploying to [Ropsten](https://ropsten.etherscan.io/).  The simplest way to deploy your code using the Parity UI.

* Download [parity](https://www.parity.io/) and [parity-ui](https://github.com/paritytech/parity-ui)

* Run parity with this command: **parity --chain ropsten** (It may take a while to download the chain, if this is your first time)

* Open the Parity UI (click Home, Parity Wallet, ACCOUNTS, Add ACCOUNT) and create a new account and save the details somwehere

* (Optional) if you want to use the sample web-app, you should create a second account as well

* Send ether from the [faucet](http://faucet.ropsten.be:3001/) to your ethereum account (This is required to deploy because it costs gas to deploy)

* Build the source using the instructions above.

* Once built, you should have a folder in the root directory called **build/contracts**.  This contains all the files you need to deploy.

* To deploy, Go to the CONTRACTS screen in the Parity UI (click Home, Parity Wallet, CONTRACTS, DEPLOY)

* Type a name and description for the contract

* For the **abi / solc combined-output** line, open your token contract .json file (e.g. SampleERC20.json) from **build/contracts**, find the **"abi": [...]** line, copy the entire contents of the brackets including the [ ] and paste in to the Parity UI line.

* For the **code** line, in your contract .json file, find the **bytecode** line, copy the long hex string (not including the parentheses) and copy the entire string in to the Parity UI line.

* Click CREATE,

* If deploying the sample Token from the Template ERC you will need to fill out 4 construct parameters: Token Name, Token Symbol, Total Supply, Decimals.  You can use any values but for decimals the recommended number is **18**

* Click Create/Deploy

* It should take a few minutes to deploy the contract and you can always check the status using [Etherscan](https://ropsten.etherscan.io/) and searching for your ethereum address.

* To view an example of transferring the tokens, check out the included web app.

### Deploy on main

You can use the above method to also deploy to main, but you need to change the chain from ropsten to main

## Test

There are 2 types of tests for each sample ERC Token: smart contracts and javascript.  I recommend testing using Javascript as it much more usable, however a sample test
smart contract has been provided as well.

You can run the unit tests using truffle

```
truffle test
```


## Web App

A sample web app using [web3](https://github.com/ethereum/web3.js/) has been provided.  For the sake of simplicity, this app does not use any additional JS frameworks, however,
there are plenty of excellent tuturials about how to incorporate web3 into your angular/react/vue application.

* Deploy your ERC token to the network of your choice.  The sample app is using [Ropsten](https://ropsten.etherscan.io/).

* You need 2 ethereum addresses to test the token transfer.  There are a couple of ways to do this, you can either install a wallet app like: [parity](https://www.parity.io/) or [metamask](https://metamask.io/)

* On line 419 dont forget to replace the **"INSERT PRIVATE KEY HERE"** with the private key of your account.  **WARNING** Only do this if you plan on running this locally, if you deploy this app publicly, putting your private key in this file will make it publicly acessible.

* Open web-app/index.html in any browser

**note**: Web3 can be a pain to work with unless you promisify it.  The example only serves as a simple tutorial, please
don't ship your code with using the same callback pattern.
