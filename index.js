require('dotenv').config();  // Load environment variables

const { monitorDeposits } = require('./blockchain/depositTracker');

console.log('Imported module:', monitorDeposits);  // Debugging line

// Start the deposit monitoring process
monitorDeposits()
  .then(() => {
    console.log('Deposit monitoring started successfully.');
  })
  .catch(error => {
    console.error('Error starting deposit monitoring:', error);
  });
