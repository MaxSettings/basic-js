const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let string = `${str}`;
  let stringsRepeat = [];
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : '+';
  
  if (options.addition !== undefined) {
    let addition = `${options.addition}`;
    let additionsRepeat = [];
    console.log(addition);

    if (options.additionRepeatTimes) {

      for (let i = 0; i < options.additionRepeatTimes; i++) {
        additionsRepeat.push(addition);
      }
    }
    
    let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
    let additionsWithSeparator = additionsRepeat.join(additionSeparator);
    
    string = string + (additionsWithSeparator ? additionsWithSeparator : addition);
  }
  
  for (let i = 0; i < repeatTimes; i++) {
      stringsRepeat.push(string);
    }
  
  return stringsRepeat.join(separator);
}

module.exports = {
  repeater
};
