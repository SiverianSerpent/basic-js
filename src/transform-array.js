const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  let result = [];

  for (let j=0; j < arr.length; j++) {
    result.push(arr[j]);
  }

  for (let i=0; i < result.length; i++) {
    if (result[i] == '--discard-next' && result[i+2] == '--double-prev') {
        result.splice(i, 3);
    } else if (result[i] == '--discard-next' && result[i+2] == '--discard-prev') {
      result.splice(i, 3);
    } else if (result[i] == '--discard-next') {
      result.splice(i, 2); 
    } else if (result[i] == '--discard-prev') {
    if (i == 0) {
      result.splice(i, 1);
    } else  {
    result.splice(i-1, 2);
    }
    } else if (result[i] == '--double-next') {
      if (i == result.length - 1) {
        result.splice(i, 1);
      } else {
      result[i] = result[i+1];
      }
    } else if (result[i] == '--double-prev') {
      if (i == 0) {
      result.splice(i, 1);
      } else {
      result[i] = result[i-1];
      }
    } 
  }
  return result

}

module.exports = {
  transform
};
