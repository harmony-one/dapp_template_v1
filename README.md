# DAPP Template

This repository provides the most simple template to create your DAPP on the Harmony Blockchain using Truffle.

## Prerequisites

* [NodeJS](https://nodejs.org/en/) 
* Harmony Dev Tools (optional)
    * [CLI](https://docs.harmony.one/home/network/wallets/harmony-cli/download-setup)
    * [Localnet](https://github.com/harmony-one/harmony)

## Setup


### Clone Repo

Clone the package from the repository

```
git clone <repo-address>
```

### Init Repo

Install all node modules
```
npm install
```

### Setup .env

Rename the '.env_example' file to '.env' and fill in the required informations

```
PUBLIC_ADDRESS=
PRIVATE_KEY=

PUBLIC_ADDRESS_2=
PRIVATE_KEY_2=
```

### Create Developer Wallets (Optional)

When you have installed the Harmony CLI you can manage your developer wallets with it

```
hmy keys add <ACCOUNT NAME> --passphrase <PASSPHRASE>
```

**Providing a passphrase is optional!**

To get the private key of your account you run:

```
hmy keys export-private-key <ACCOUNT NAME>
```


**IMPORTANT: NEVER SHARE YOUR PRIVATE KEYS WITH ANYONE!**
**The .env is ignored from git and you should never publish it**




### Compile

Compile your contracts by running
```
truffle compile
```

### Deploy 
To deploy your contracts to the blockchain run

```
truffle deploy
```
 By default contracts are deployed to the localnet. You can define the network you deploy to by providing the '--network' parameter:

```
truffle deploy --network testnet
```

**Deploying to the blockchain costs transaction fees! If you run on localnet you must get some funds first. Check the next chapter for how to do that.**

### Getting Funds 

#### Localnet

The localnet operates like the mainnet, using some locally deployed validators, that sign blocks and gain block rewards. To get funds, we just transfer some of those profits to our wallets

```
hmy --node=http://localhost:9500 transfer --from one103q7qe5t2505lypvltkqtddaef5tzfxwsse4z7 --from-shard 0 --to-shard 0 --to <YOUR_PUBLIC_ADDRESS> --amount 40
```

When successful, the console logs a transaction receipt and you can check the balance of your account by running

```
hmy balances <YOUR_PUBLIC_ADDRESS>
```


#### Testnet

On testnet, you can use _Faucets_ that will send $ONEs to your testnet wallet. You can find those here:

[https://docs.harmony.one/home/developers/network-and-faucets#faucets](https://docs.harmony.one/home/developers/network-and-faucets#faucets)


#### Mainnet

You should only deploy to mainnet, when your application is ready to be released. Here you are using real $ONEs. You can use these fiat gateways to get them into your wallet!

[https://docs.harmony.one/home/general/ecosystem/partners/fiat-gateways](https://docs.harmony.one/home/general/ecosystem/partners/fiat-gateways)

## Example: Simple Bank

**This is just a small contract example! Everybody deposits in the same pool and can withdraw everything from that pool! It's just meant as an example and should not be used in production!**

We assume you got the contract and localnet already running. 
Otherwise setup the localnet and transfer the funds first!

1. Copy the files from the example folder
    
    + App.js -> src/components/App.js
    + Bank.sol -> src/contracts/Bank.sol
    + 2_deploy.js -> migrations/2_deploy.js

2. Compile and run the migrations

```
truffle compile
truffle migrate
```
**The output contains the contract address. Copy this address for the next step**
```
...
Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x279a32d683ee617c14ba6c3fe646ebe19684dc5f03e74f19e68cc459be2f2d6e
   > Blocks: 2            Seconds: 4
   > contract address:    0x46c33fA8506b8971932faf92ca886E49f199A7Dd
   > block number:        797
   > block timestamp:     1627126628
   ...
```
3. Insert contract address into App.js.

4. Run the app with 'npm run start'

6. Setup a metamask with the correct network. 

5. When connected with MetaMask you can deposit and withdraw funds.


If you want to create a more solid Bank App, have a look at this repository:
[https://github.com/harmony-one/dbank/blob/master/src/contracts/dBank.sol](https://github.com/harmony-one/dbank/blob/master/src/contracts/dBank.sol)