var crypto = require('crypto');

function encrypt(plainText, keyBase64, ivBase64) {

  var key = Buffer.from(keyBase64, 'base64');
  var iv = Buffer.from(ivBase64, 'base64');

  var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
  cipher.update(plainText, 'utf8', 'base64');
  return cipher.final('base64');
};

function decrypt (messagebase64, keyBase64, ivBase64) {

  var key = Buffer.from(keyBase64, 'base64');
  var iv = Buffer.from(ivBase64, 'base64');

  var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  decipher.update(messagebase64, 'base64');
  return decipher.final();
}

// --------------------------------------- Testing ---------------------------------------
var keyString = '<YOUR KEY>';

// To be compatible with the encryption used in the link below, use the same key and IV
// See: https://www.codeproject.com/Tips/1023149/%2FTips%2F1023149%2FEncryption-and-Decryption-Support-in-NET-and-Andro
var ivString = '<YOUR INITIALIZATION VECTOR>';

var keyBase64 = Buffer.from(keyString).toString('base64');
var ivBase64 = Buffer.from(ivString).toString('base64');
var plainText = '<PLAINTEXT HERE>';

var cipherText = encrypt(plainText, keyBase64, ivBase64);
var decryptedCipherText = decrypt(cipherText, keyBase64, ivBase64);

console.log('---------------------------------------');
console.log('Plaintext: ' + plainText);
console.log('Ciphertext: ' + cipherText);
console.log('Decoded Ciphertext: ' + decryptedCipherText);
