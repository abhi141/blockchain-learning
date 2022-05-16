'use strict'
const Web3= require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
let web3 = new Web3(rpcURL)

let contractAddress ='0x4D78D723B11d7500eD1E657Dc1401388657A2401'
let contractABI =[{"inputs":[],"name":"myNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"myNum","type":"uint256"}],"name":"retrivePure","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"retriveView","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"myNum","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]
var simplestorageContract = new web3.eth.Contract(contractABI,contractAddress);
var privateKey = Buffer.from('f6681c35ebb83164c15be99909bea7b7e782fc3e49058d5f3b6869a6c766eaf4', 'hex');
console.log(simplestorageContract)
// Calling the function in a contact
simplestorageContract.methods.retrivePure(5).call().then(function(result){
console.log(result)

})












