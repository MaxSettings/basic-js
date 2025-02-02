const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};

  for (let i = 0; i < domains.length; i++) {
    let arr = domains[i].split('.');

    let current = '';

    for (let j = arr.length - 1; j >= 0; j--) {
      console.log(current);
      current += `.${arr[j]}`;

      if (Object.keys(res).includes(current)) {
        res[current]++;
      } else {
        res[current] = 1;
      }
    }  
  }

  return res;
}

module.exports = {
  getDNSStats
};
