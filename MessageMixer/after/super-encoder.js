/* 
Program to "encode/decode" message using the encryptor functions from encryptor.js

To run: 
$ node super-encoder.js [encode|decode]
*/

// Import the encryptors functions from encryptors.js
const encryptors = require('./encryptors.js');
caesarCipher = encryptors.caesarCipher;
symbolCipher = encryptors.symbolCipher;
reverseCipher = encryptors.reverseCipher;

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  var message = reverseCipher(str);
  message = caesarCipher(message, 1487);
  message = symbolCipher(message);
  return message;
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  var message = symbolCipher(str);
  message = caesarCipher(message, -1487);
  message = reverseCipher(message);
  return message;
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
 
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);