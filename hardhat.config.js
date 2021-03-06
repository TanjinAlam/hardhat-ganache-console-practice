require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ganache");
require('@nomiclabs/hardhat-ethers')
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      // // If you want to do some forking, uncomment this
      // forking: {
      //   url: MAINNET_RPC_URL
      // }
    },
    localhost: {},
    ganache: {
      url: "http://localhost:7545",
      // accounts: {
      //     mnemonic: MNEMONIC,
      // }
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
      {
        version: "0.7.0",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  mocha: {
    timeout: 100000,
  },
};
