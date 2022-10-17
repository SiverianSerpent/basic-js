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
  if (str.length == 0) {
    return '';
  }
  let counter = 0;
  let arr = str.split('');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i+1]) {
      counter++
      arr[i] = counter + arr[i]
    } else if (arr[i] !== arr[i+1]) {
      if (counter != 0) {
        counter++;
        arr[i] = counter + arr[i];
        counter = 0;
        newArr.push(arr[i]);
      } else {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr.join('');
}

module.exports = {
  encodeLine
};
