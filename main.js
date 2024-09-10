// src/app.js

const { monitorDeposits } = require('./blockchain/depositTracker');
const { logEvent } = require('./utils/logger');

function start() {
  logEvent('Starting Ethereum Deposit Tracker');
  monitorDeposits();
}

start();
