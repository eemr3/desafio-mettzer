const fs = require('fs/promises');

const readFileKey = () => {
  const key = fs.readFile('./secrete.key', 'utf-8');

  return key;
};

module.exports = readFileKey;
