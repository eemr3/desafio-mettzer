const Service = require('../services/User.service');

const createUser = async (req, res) => {
  try {
    const user = await Service.createUser(req.body);

    return res.status(201).json(user);
  } catch (error) {
    if (!error.status) {
      return res.status(500).json({ error: 'internal server error!' });
    }
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  createUser,
};
