// src/utils/alert.js

const axios = require('axios');
const { telegramToken, telegramChatId } = require('../config');

function sendTelegramAlert(message) {
  const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
  axios.post(url, {
    chat_id: telegramChatId,
    text: message
  });
}

module.exports = { sendTelegramAlert };
