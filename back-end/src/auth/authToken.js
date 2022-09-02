const jwt = require('jsonwebtoken');
const readFileKey = require('../utils/readFileKey');

const genereteToken = (data) => {
  const SECRETE_KEY = readFileKey();
  const CONFIG = {
    algorithm: 'HS256',
    expiresIn: '1h',
  };

  const token = jwt.sign(data, SECRETE_KEY, CONFIG);

  return token;
};

const decodedToken = (token) => {
  const SECRETE_KEY = readFileKey();
  try {
    const decoded = jwt.verify(token, SECRETE_KEY);

    return decoded;
  } catch (error) {
    return false;
  }
};

module.exports = {
  genereteToken,
  decodedToken,
};
