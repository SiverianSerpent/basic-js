const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (flag = true){
    this.flag = flag;
  }
  encrypt(str, cipher) {
    if (str === undefined || cipher === undefined) {
      throw new Error('Incorrect arguments!')
    }
        let a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
      let neededArr = [];
    
    
    
    neededArr.push(a.slice());
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let b;
    let result = [];
    let zero = 0;
    for (let i=1; i < 26; i++) {
      b = a.splice(0,1);
      a.push(b.toString());
      neededArr.push(a.slice());
      /* neededArr[i].push(b.toString()); */
    }
        let strUpperCase = str.toUpperCase();
        let repeat = Math.ceil(str.length / cipher.length);
        let cipherUpperCase = cipher.toUpperCase().repeat(repeat).slice(0, str.length);
        for (let i=0; i < strUpperCase.length; i++) {
          if (alphabet.includes(strUpperCase[i])) {
          result.push(neededArr[neededArr[0].indexOf(cipherUpperCase[zero])][neededArr[0].indexOf(strUpperCase[i])]);
          zero++
        } else {
          result.push(strUpperCase[i]);
        }
      }
      if(this.flag) {
        return result.join('');
      } else {
        return result.reverse().join('');
      }
  }
  decrypt(str, cipher) {
    if (str === undefined || cipher === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
      let neededArr = [];
    
    
    
    neededArr.push(a.slice());
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let b;
    let result = [];
    let zero = 0;
    for (let i=1; i < 26; i++) {
      b = a.splice(0,1);
      a.push(b.toString());
      neededArr.push(a.slice());
      /* neededArr[i].push(b.toString()); */
    }
        let strUpperCase = str.toUpperCase();
        let repeat = Math.ceil(str.length / cipher.length);
        let cipherUpperCase = cipher.toUpperCase().repeat(repeat).slice(0, str.length);
        for (let i=0; i < strUpperCase.length; i++) {
          if (alphabet.includes(strUpperCase[i])) {
            let row = neededArr[neededArr[0].indexOf(cipherUpperCase[zero])];
            let indexOfLetter = row.indexOf(strUpperCase[i]);
            result.push(neededArr[0][indexOfLetter]);
            zero++
        } else {
          result.push(strUpperCase[i]);
        }
      }
      if(this.flag) {
        return result.join('');
      } else {
        return result.reverse().join('');
      }
      
  }
}

module.exports = {
  VigenereCipheringMachine
};
