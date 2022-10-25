const Web3 = require("web3");
const rpcURL = "https://mainnet.infura.io/v3/afb1c0f59efd4dbea47d8c9c867a1209";
const web3 = new Web3(rpcURL);
// web3.eth.getBlockNumber(function (error, result) {
//   console.log(result);
// });
async function getBlockNumber() {
  const latestBlockNumber = await web3.eth.getBlockNumber();
  console.log(latestBlockNumber);
  return latestBlockNumber;
}

getBlockNumber();
