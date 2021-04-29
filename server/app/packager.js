const fs = require("fs");
const path = require("path");

const bc = require('../models/block').BlockChain;

const getBooster = (buyer) => {
  let booster = [];
  let data = require("../data/set1.json");
  if(data.rare.length === 0){return;}
  
  shuffleArray(data.common);
  shuffleArray(data.rare);
  for(let i = 0; i < 4; i++){
    booster.push(data.common.pop());
  }
  booster.push(data.rare.pop());

  booster.forEach(c => {
    let index = c.chain.length-1;
    let card = new bc();
    card.chain = c.chain;
    card.addBlock({pastOwner:c.chain[index].owner, owner:buyer})
  });

  fs.writeFileSync(path.join(__dirname, "../data/set1.json"), JSON.stringify(data));
  fs.writeFileSync(path.join(__dirname, `../data/boosters/${buyer}.json`), JSON.stringify(booster));

  return booster;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const getQteLeft = () => {
  let data = require("../data/set1.json");
  return data.rare.length;
}

module.exports = {getBooster, getQteLeft};