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
  let newArray = domains.map((e) => {
 return e.split('.');
 }).map((e) => {
   for (let key in e) {
     e[key] = '.' + e[key];
   }
   return e.reverse();
 }).sort((a,b) => a.length - b.length).sort().flat(1).reduce(function(acc, el) {
acc[el] = (acc[el] || 0) + 1;
return acc;
}, {});
  let string = '';
 let c = Object.keys(newArray).map((key) => [key, newArray[key]]);
    for (let i = 0; i < c.length; i++) {
      if (i = 0) {
        string = c[i][0];
      } else if (c[i][1] > 1) {
        string += c[i][0];
        c[i][0] = string;
      } else {
      	c[i][0] = string + c[i][0];
      } 
    }
 return Object.fromEntries(c);
}

module.exports = {
  getDNSStats
};
