const fs = require("fs");
const path = require("path");

const Set = require('../models/card').Set;

/**
 * Normaly we should save this to a database. A json file will do for now
 */
const createSet = () => {
  fs.writeFileSync(path.join(__dirname, "../data/set1.json"), JSON.stringify(new Set()));
}

createSet();