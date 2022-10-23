// var Tx = require("ethereumjs-tx").Transaction;
// const Web3 = require("web3");
// const web3 = new Web3("https://ropsten.infura.io/YOUR_INFURA_API_KEY");

// const account1 = "0x73c0065AD38C44a4689E6B7CeAA945610b8B7F79"; // Your account address 1
// const account2 = "0x8206b4c67cF9437Cb301869135f20aF003E01A36"; // Your account address 2

// const privateKey1 = Buffer.from(
//   "7272b5831bf064beaa5e6211970ced55da65b6a14defc8f99d3a1718699b0237",
//   "hex"
// );
// const privateKey2 = Buffer.from(
//   "354fa134f36a6ace5fb541cccbcb61bfba08af9906eb08693006e25ef99ebd4c",
//   "hex"
// );

// web3.eth.getTransactionCount(account1, (err, txCount) => {
//   // Build the transaction
//   const txObject = {
//     nonce: web3.utils.toHex(txCount),
//     to: account2,
//     value: web3.utils.toHex(web3.utils.toWei("0.1", "ether")),
//     gasLimit: web3.utils.toHex(21000),
//     gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
//   };

//   // Sign the transaction
//   const tx = new Tx(txObject);
//   tx.sign(privateKey1);

//   const serializedTx = tx.serialize();
//   const raw = "0x" + serializedTx.toString("hex");

//   // Broadcast the transaction
//   web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//     console.log("txHash:", txHash);
//     // Now go check etherscan to see the transaction!
//   });
// });

// {
//   address: '0x73c0065AD38C44a4689E6B7CeAA945610b8B7F79',
//   privateKey: '0x7272b5831bf064beaa5e6211970ced55da65b6a14defc8f99d3a1718699b0237',
//   signTransaction: [Function: signTransaction],
//   sign: [Function: sign],
//   encrypt: [Function: encrypt]
// {
//   address: '0x8206b4c67cF9437Cb301869135f20aF003E01A36',
//   privateKey: '0x354fa134f36a6ace5fb541cccbcb61bfba08af9906eb08693006e25ef99ebd4c',
//   signTransaction: [Function: signTransaction],
//   sign: [Function: sign],
//   encrypt: [Function: encrypt]
// }

var Tx = require("ethereumjs-tx").Transaction;
const Web3 = require("web3");
const web3 = new Web3("https://ropsten.infura.io/YOUR_INFURA_API_KEY");
web3.eth.accounts.create();
const account1 = "0x73c0065AD38C44a4689E6B7CeAA945610b8B7F79"; // Your account address 1
const account2 = "0x8206b4c67cF9437Cb301869135f20aF003E01A36"; // Your account address 2

const privateKey1 = Buffer.from(
  "7272b5831bf064beaa5e6211970ced55da65b6a14defc8f99d3a1718699b0237",
  "hex"
);
const privateKey2 = Buffer.from(
  "354fa134f36a6ace5fb541cccbcb61bfba08af9906eb08693006e25ef99ebd4c",
  "hex"
);

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account2,
    value: web3.utils.toHex(web3.utils.toWei("0.1", "ether")),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
  };
  console.log(txObject);

  // Sign the transaction
  const tx = new Tx(txObject);
  tx.sign(privateKey1);

  const serializedTx = tx.serialize();
  const raw = "0x" + serializedTx.toString("hex");

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log("txHash:", txHash);
    console.log(raw)
    // Now go check etherscan to see the transaction!
  });
});
