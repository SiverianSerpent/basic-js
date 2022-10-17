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
  if (domains.length == 0) {
    return {};
  }
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
 let c = Object.keys(newArray).map((key) => [key, newArray[key]]);
 let string = c[0][0];
 console.log(string);
 for (let i = 1; i < c.length; i++) {
   console.log(c[i][0]);
   if (c[i][1] > 1) {
     string += c[i][0];
     c[i][0] = string;
   } else {
     c[i][0] = string + c[i][0];
   } 
 }
 let b = Object.fromEntries(c);
 return b;
}

module.exports = {
  getDNSStats
};
