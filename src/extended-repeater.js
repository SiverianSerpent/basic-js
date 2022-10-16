const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
	let newArr = [];
  let addition1 = [];
  let aditionComplete;
  let newArrComplete;
  if (str == undefined) {

    if (options.hasOwnProperty('repeatTimes')) {
      for (i = 0; i < options['repeatTimes']; i++) {
        newArr.push('null');
       }
    } else {
      newArr.push('null');
    }
  } else if (options.hasOwnProperty('repeatTimes') && str != undefined) {
   for (i = 0; i < options['repeatTimes']; i++) {
    newArr.push(String(str));
   }} else {
    newArr.push(String(str));
   }
   // 

   // addition1 Array
   if (options.hasOwnProperty('addition') && options['addition'] == undefined) {
                if (options.hasOwnProperty('additionRepeatTimes')) {
                  for (i = 0; i < options['additionRepeatTimes']; i++) {
                    addition1.push('null');
                  }
                } else {
                  addition1.push('null');
                }
   } else if (options.hasOwnProperty('addition')) {
                if (options.hasOwnProperty('additionRepeatTimes')) {
                    for (i = 0; i < options['additionRepeatTimes']; i++) {
                      addition1.push(String(options['addition']));
                    }
                } else {
                  addition1.push(String(options['addition']));
                } 
    } 


   if (!options.hasOwnProperty('additionSeparator')) {
   	aditionComplete = addition1.join('|'); 
   } else {
   	aditionComplete = addition1.join(`${options['additionSeparator']}`); 
   }
   if (options.hasOwnProperty('separator')) {
  	 newArrComplete = newArr.map((e) => e+aditionComplete).join(options['separator']);
   } else {
     newArrComplete = newArr.map((e) => e+aditionComplete).join('+');
   }
   return newArrComplete;
  }

module.exports = {
  repeater
};
