const bc = require("bcrypt");

class Block {
  constructor (id, cardId, prevHash, data) {
    this.id = id;
    this.cardId = cardId;
    this.stamp = Date.now();
    this.prevHash = prevHash;
    this.data = data;
    this.hash = bc.hashSync(String(this.id + this.cardId + this.stamp + this.hash + this.prevHash + JSON.stringify(this.data)), 13);
  }
}

class BlockChain {
  /**
   * @type {Block[]}
   * @memberof BlockChain
   */
  chain = [];

  constructor(){
  }

  addBlock(data, cardId = null){
    let id = this.chain.length;
    let prevHash = this.chain.length !== 0 ? this.chain[this.chain.length-1].hash : "";
    if(prevHash !== 0 && !cardId){
      cardId = this.chain[id-1].cardId;
    }
    let block = new Block(id, cardId, prevHash, data);

    this.chain.push(block);
  }
}

module.exports = {Block, BlockChain};