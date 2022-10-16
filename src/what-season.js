const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {  
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!'
  } else if (!date.getMonth) {
    throw new Error("Invalid date!")
  } else if (date.hasOwnProperty(Symbol.toStringTag)) {
    throw new Error("Invalid date!")
  }
  const month = date.getMonth();
  const monthArr = ["winter","winter","spring","spring","spring","summer","summer","summer","fall","fall","fall","winter"];
  let season = monthArr[month];
  return season;
  
}

module.exports = {
  getSeason
};
