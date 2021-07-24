require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKeys = [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2]
  .filter(private_key => private_key != null)

module.exports = {
  networks: {
    development: {
      provider: () => {
        return new HDWalletProvider(
          privateKeys, // Array of account private keys
          "http://localhost:9500"// URL to the RPC endpoint
        )
      },
      network_id: "1666700000" // Match any network id
    },
    testnet: {
      provider: () => {
        return new HDWalletProvider(
          privateKeys, // Array of account private keys
          "https://api.s0.pops.one" // URL to the RPC endpoint
        )
      },
      network_id: 1666700000
    },
    mainnet: {
      provider: () => {
        return new HDWalletProvider(
          privateKeys, // Array of account private keys
          "https://api.harmony.one" // URL to the RPC endpoint
        )
      },
      network_id: 1666600000
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "^0.6.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}