const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let maxSum = 0;
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentSum = arr.reduce((acc, it, index) => {
      if (index === i) {
        return acc;
      }

      return acc + it;
    }, 0)

    if (currentSum > maxSum) {
      maxSum = currentSum;
      index = i;
    }
  }
  arr.splice(index, 1);

  return Number(arr.join(''));
}

module.exports = {
  deleteDigit
};
