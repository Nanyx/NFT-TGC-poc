const bc = require("./block").BlockChain;

class Card {
  constructor(id){

  }
}

const base = {owner:"Booster", pastOwner:"Creator"};

class Set {
  common = [];
  rare = [];

  constructor(){
    //common : 80 cards
    for(let i = 0; i < 80; i++){
      let id = `c-${i}`;
      this.common.push(this.generateCard(id));
      console.log(`card: ${id} generated`);
    }
    //uncommon : 40 cards
    for(let i = 0; i < 40; i++){
      let id = `u-${i}`;
      this.common.push(this.generateCard(id));
      console.log(`card: ${id} generated`);
    }
    //rare : 20 cards
    for(let i = 0; i< 20; i++){
      let id = `r-${i}`;
      this.rare.push(this.generateCard(id));
      console.log(`card: ${id} generated`);
    }
    //mythic : 10 cards | we add them to the rare loot table
    for(let i = 0; i< 10; i++){
      let id = `m-${i}`;
      this.rare.push(this.generateCard(id));
      console.log(`card: ${id} generated`);
    }
  }

  generateCard(id){
    let card = new bc();
    card.addBlock({owner:"Booster", pastOwner:"Creator"}, id);
    return card;
  }
}

module.exports = {Set, Card};