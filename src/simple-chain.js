const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
    return this;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof this.chain[position] === 'undefined' || typeof position === 'string' || position === 0) {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    } else {
    this.chain.splice(position-1, 1);
    return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let a = this.chain.join('~~');
    this.chain = [];
    return a;
  }
  
};

module.exports = {
  chainMaker
};
