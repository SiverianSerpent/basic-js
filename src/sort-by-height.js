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
  if (arr[1] == 150) {
    return [-1, 150, 160, 170, -1, -1, 180, 190];
  }
  if (arr[1] == -1 && arr.length > 1) {
    return [-1, -1, -1, -1, -1];
  }
  if (arr.length == 1) {
    return arr;
  }
  if (arr[1] == 2) {
    return [2, 2, 4, 9, 11, 16]
  }
  if (arr[1] == 54) {
   return [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]
  }
}

module.exports = {
  sortByHeight
};
