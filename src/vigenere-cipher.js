const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let keyChar = 0;
    let keyMessage = [];
    
    for (let i = 0; i < message.length; i++) {
      if (/\w/.test(message[i])) {
        if (keyChar === key.length) {
          keyChar = 0;
        }
  
        keyMessage.push(key[keyChar].toUpperCase());
        keyChar++;
      } else {
        keyMessage.push(message[i].toUpperCase());
      }
    }
    
    key = keyMessage.join('');
  
    message = message.toUpperCase();
    const FIRST_LETTER = 'A'.charCodeAt(0);
    let LETTERS_COUNT = 26;
    const res = [];
    
    for (let i = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
  
        let letterCharCode = message.charCodeAt(i) - FIRST_LETTER;
        let shift = key.charCodeAt(i) - FIRST_LETTER;
        
        res.push(String.fromCharCode(FIRST_LETTER + (letterCharCode + shift) % LETTERS_COUNT))
      } else {
        res.push(message[i]);
      }
    }
    
    return this.direction ? res.join('') : res.reverse().join('');
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let keyChar = 0;
    let keyMessage = [];
    
    for (let i = 0; i < message.length; i++) {
      if (/\w/.test(message[i])) {
        if (keyChar === key.length) {
          keyChar = 0;
        }
  
        keyMessage.push(key[keyChar].toUpperCase());
        keyChar++;
      } else {
        keyMessage.push(message[i].toUpperCase());
      }
    }
    
    key = keyMessage.join('');
  
    message = message.toUpperCase();
    const FIRST_LETTER = 'A'.charCodeAt(0);
    let LETTERS_COUNT = 26;
    const res = [];
    
    for (let i = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
  
        let letterCharCode = message.charCodeAt(i) - FIRST_LETTER;
        let shift = key.charCodeAt(i) - FIRST_LETTER;
        
        res.push(String.fromCharCode(FIRST_LETTER + (letterCharCode - shift + LETTERS_COUNT) % LETTERS_COUNT))
      } else {
        res.push(message[i]);
      }
    }
    
    return this.direction ? res.join('') : res.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
