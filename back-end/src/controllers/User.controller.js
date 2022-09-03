const Service = require('../services/User.service');

const createUser = async (req, res) => {
  try {
    const user = await Service.createUser(req.body);

    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  createUser,
};
