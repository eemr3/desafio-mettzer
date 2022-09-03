const Service = require('../services/SignIn.service');

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await Service.signIn(email, password);

    return res.status(200).json(token);
  } catch (error) {
    console.info(error);
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  signIn,
};
