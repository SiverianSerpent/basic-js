const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    Array.prototype.max = function() {
      return Math.max.apply(null, this);
    };
  
  function f1(item, level = 0){ 
      if (item instanceof Array){
          return item.map(function(value, index){
              return f1(value, level + 1)
          }).max() - (level > 0 ? 0 : 1) // Если главный массив не считаем
      }
      return level;
  }
  return f1(array)
  
  }
}

module.exports = {
  DepthCalculator
};
