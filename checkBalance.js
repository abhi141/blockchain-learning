'use strict'
const Web3= require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
let web3 = new Web3(rpcURL)
// wei='2'
const address = '0x78fD8fC01E7FF03663051506D00c36807b9383c7' // Your account address goes here
web3.eth.getBalance(address, (err, wei) => {
 let balance = web3.utils.fromWei(wei, 'ether')
 console.log("balance",balance)
})
