const bcrypt = require('bcryptjs');
const { generateToken } = require('../auth/authToken');
const { User } = require('../database/models');
const errorBase = require('../utils/errorBase');

const signIn = async (userEmail, password) => {
  const isSignIn = await User.findOne({ where: { email: userEmail } });

  if (!isSignIn) {
    throw errorBase(403, 'Email ou senha inválidos!');
  }

  const pwdIsValid = await bcrypt.compare(password, isSignIn.password);
  if (!pwdIsValid) {
    throw errorBase(403, 'Email ou senha inválidos!');
  }
  const token = await generateToken({
    id: isSignIn.id,
    name: isSignIn.name,
    email: isSignIn.email,
  });

  return { token };
};

module.exports = {
  signIn,
};
