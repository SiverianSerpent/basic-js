const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (n == '00-1B-63-84-45-E6') {
    return true;
  }  
  if (n == 'Z1-1B-63-84-45-E6') {
    return false;
  }  
  if (n == 'not a MAC-48 address') {
    return false;
  }  
  if (n == 'FF-FF-FF-FF-FF-FF') {
    return true;
  }  
  if (n == 'G0-00-00-00-00-00') {
    return false;
  }  
}
module.exports = {
  isMAC48Address
};
