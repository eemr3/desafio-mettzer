const jwt = require('jsonwebtoken');
const readFileKey = require('../utils/readFileKey');

const generateToken = async (data) => {
  const SECRETE_KEY = await readFileKey();
  const CONFIG = {
    algorithm: 'HS256',
    expiresIn: '1h',
  };

  const token = jwt.sign(data, SECRETE_KEY, CONFIG);

  return token;
};

const decodedToken = async (token) => {
  const SECRETE_KEY = await readFileKey();
  try {
    const decoded = jwt.verify(token, SECRETE_KEY);

    return decoded;
  } catch (error) {
    return false;
  }
};

module.exports = {
  generateToken,
  decodedToken,
};
