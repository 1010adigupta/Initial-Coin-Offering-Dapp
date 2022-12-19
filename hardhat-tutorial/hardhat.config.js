require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "https://green-red-patron.ethereum-goerli.discover.quiknode.pro/8ed184641a3dc82ccf86d6f82cf26e4edd80635e/",
      accounts: ["650ebbaff9211ead1ebf2300f9d7805712f489766fe5ec7899a18f88efd67a45"],
    },
  },
};
