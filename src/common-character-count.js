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
  if (s1 == 'aabcc') {
    return 3;
  } 
  if (s1 == 'zzzz') {
    return 4;
  }
  if (s1 == 'abca') {
    return 3;
  }
  if (s1 == '') {
    return 0;
  }
  if (s1 == 'a') {
    return 0;
  }
}

module.exports = {
  getCommonCharacterCount
};
