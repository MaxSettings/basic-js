const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const excludedIndexes = [];
  const sortedNumbers = arr.filter(it => it !== -1).sort((a, b) => a - b);

  arr.forEach((it, index) => {
    if (it === -1) {
      excludedIndexes.push(index);
    }
  });

  

  for (let i = 0; i < excludedIndexes.length; i++) {
    sortedNumbers.splice(excludedIndexes[i], 0, -1);
  }

  return sortedNumbers
}

module.exports = {
  sortByHeight
};
