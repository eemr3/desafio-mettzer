const Service = require('../services/SignIn.service');

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await Service.signIn(email, password);

    return res.status(200).json(token);
  } catch (error) {
    if (!error.status) {
      return res.status(500).json({ error: 'internal server error!' });
    }

    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  signIn,
};
