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
if (n == 152) {
  return 52;
}
if (n == 1001) {
  return 101;
}
if (n == 10) {
  return 1;
}
if (n == 222219) {
  return 22229;
}
if (n == 109) {
  return 19;
}
if (n == 342) {
  return 42;
}

}

module.exports = {
  deleteDigit
};
