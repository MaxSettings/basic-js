const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  const obj1 = {};
  const obj2 = {};
  let res = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (Object.keys(obj1).includes(arr1[i])) {
      obj1[arr1[i]]++;
    } else {
      obj1[arr1[i]] = 1;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (Object.keys(obj2).includes(arr2[i])) {
      obj2[arr2[i]]++;
    } else {
      obj2[arr2[i]] = 1;
    }
  }

  for (key in obj1) {
    if (obj2[key] !== undefined) {
      let difference = Math.abs(obj1[key] - obj2[key]);

      if (obj1[key] > obj2[key]) {
        res += obj1[key] - difference;
      } else {
        res += obj2[key] - difference;
      }
    }
  }

  return res;
}

module.exports = {
  getCommonCharacterCount
};
