// src/utils/logger.js

const fs = require('fs');

function logEvent(message) {
  fs.appendFile('tracker.log', message + '\n', err => {
    if (err) throw err;
  });
}

module.exports = { logEvent };
