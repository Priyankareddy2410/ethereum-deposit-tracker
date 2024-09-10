// src/blockchain/rpc.js

const Web3 = require('web3');
const { infuraUrl } = require('../config');

const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

async function getBlockNumber() {
  return await web3.eth.getBlockNumber();
}

async function getTransaction(transactionHash) {
  return await web3.eth.getTransaction(transactionHash);
}

module.exports = { getBlockNumber, getTransaction };
