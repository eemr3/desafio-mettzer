const bcrypt = require('bcryptjs');
const { User } = require('../database/models');
const errorBase = require('../utils/errorBase');

const createUser = async (data) => {
  const { name, email, password } = data;
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    throw errorBase(409, 'Usuário já cadastrado');
  }

  const newPwd = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: newPwd });

  return user;
};

module.exports = {
  createUser,
};
