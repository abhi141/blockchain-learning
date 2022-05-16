'use strict'
const Web3= require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
var Tx = require('ethereumjs-tx').Transaction;
let web3 = new Web3(rpcURL)
const address = '0x78fD8fC01E7FF03663051506D00c36807b9383c7' // Your account address goes here


let contarctCode='0x608060405260016000556000600160006101000a81548160ff0219169083151502179055506040518060400160405280600c81526020017f746565737420737472696e6700000000000000000000000000000000000000008152506002908051906020019061006f9291906100d7565b507378fd8fc01e7ff03663051506d00c36807b9383c7600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503480156100d157600080fd5b5061017c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061011857805160ff1916838001178555610146565b82800160010185558215610146579182015b8281111561014557825182559160200191906001019061012a565b5b5090506101539190610157565b5090565b61017991905b8082111561017557600081600090555060010161015d565b5090565b90565b6101598061018b6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806323fd0e40146100515780635868a6eb1461006f5780636057361d146100b1578063e07ac9fb146100df575b600080fd5b6100596100fd565b6040518082815260200191505060405180910390f35b61009b6004803603602081101561008557600080fd5b8101908080359060200190929190505050610103565b6040518082815260200191505060405180910390f35b6100dd600480360360208110156100c757600080fd5b8101908080359060200190929190505050610110565b005b6100e761011a565b6040518082815260200191505060405180910390f35b60005481565b6000600582029050919050565b8060008190555050565b6000805490509056fea26469706673582212201531d14155886a04d68308c1525df3047d4412b94a8d3ae1b310867e8c03a3f764736f6c63430006000033';
let contractAddress ='0x4D78D723B11d7500eD1E657Dc1401388657A2401'
let contractABI =[{"inputs":[],"name":"myNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"myNum","type":"uint256"}],"name":"retrivePure","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"retriveView","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"myNum","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]
var simplestorageContract = new web3.eth.Contract(contractABI,contractAddress);
var privateKey = Buffer.from('f6681c35ebb83164c15be99909bea7b7e782fc3e49058d5f3b6869a6c766eaf4', 'hex');
console.log(simplestorageContract)


// sign and deploy a smart contract

web3.eth.getTransactionCount(address,(err,count)=>{
    var rawTx = {
  nonce:web3.utils.toHex(count),
  gasPrice:web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
gasLimit:web3.utils.toHex(1000000),
  // to: address,
  value:web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
  data:contarctCode
}
console.log(rawTx)

var tx = new Tx(rawTx,{ chain: 'ropsten' });
tx.sign(privateKey);

var serializedTx = tx.serialize();
const raw='0x' + serializedTx.toString('Hex')

web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
    console.log("txHash--->",txHash)
    console.log(err)
})
})






