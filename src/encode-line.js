const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return '';
  }

  const arr = str.split("");
  const res = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      res.push([1, arr[i]]);
    } else if (arr[i] === arr[i - 1]) {
      res[res.length - 1][0] += 1;
    } else {
      res.push([1, arr[i]]);
    }
  }
  
  return res.reduce((acc, it) => {

    return acc + (it[0] === 1 ? '' : it[0]) + it[1];
  }, '');
}

module.exports = {
  encodeLine
};
