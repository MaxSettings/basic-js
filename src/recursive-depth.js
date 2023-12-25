const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor(arr) {
    this.arr = arr;
  }

  calculateDepth(arr) {
    if (arr.filter(it => Array.isArray(it)).length === 0) {
      return 1; 
    } else { 
      let level = 1;
      
      let updatedArr = arr.flat();
      
      level += this.calculateDepth(updatedArr);
  
      return level;
    }
  }
}

module.exports = {
  DepthCalculator
};
