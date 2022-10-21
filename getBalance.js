const Web3 = require("web3");
const rpcURL = "https://mainnet.infura.io/v3/afb1c0f59efd4dbea47d8c9c867a1209";
const web3 = new Web3(rpcURL);
const address = "0x52bc44d5378309EE2abF1539BF71dE1b7d7bE3b5"; // Your account address goes here
web3.eth.getBalance(address, (err, wei) => {
  balance = web3.utils.fromWei(wei, "ether");
  console.log(balance);
});
// const Web3 = require("web3");
// const rpcURL = "https://mainnet.infura.io/v3/afb1c0f59efd4dbea47d8c9c867a1209";

// const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));

// const address = "0x90e63c3d53E0Ea496845b7a03ec7548B70014A91"; // Your account address goes here
// web3.eth.getBalance(
//   "0x52bc44d5378309EE2abF1539BF71dE1b7d7bE3b5",
//   function (err, result) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(web3.utils.fromWei(result, "ether") + " ETH");
    }
  }
);
