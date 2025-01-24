const crypto = require('crypto');
const dataToEncrypt = 'Sensitive information';
const encryptionKey = 'secretKey';
const cipher = crypto.createCipher('aes-256-cbc',encryptionkey);
let encryptedData = cipher.update(dataToEncrypt,'utf-8',hex);
encrypedData += cipher.final('hex');

fetch('https://api.example.com/data')
   .then(response=> response.json())
   .then(data => console.log(data))
   .catch(error=> console.error('Error:',error));

axios.get('url')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:',error));