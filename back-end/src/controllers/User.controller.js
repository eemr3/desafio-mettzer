const Service = require('../services/User.service');

const createUser = async (req, res) => {
  const user = await Service.createUser(req.body);

  return res.status(201).json(user);
};

module.exports = {
  createUser,
};
