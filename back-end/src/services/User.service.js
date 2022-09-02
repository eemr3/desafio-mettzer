const { User } = require('../database/models');

const createUser = async (data) => {
  const user = User.create(data);

  return user;
};

module.exports = {
  createUser,
};
