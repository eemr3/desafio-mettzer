const { decodedToken } = require('../auth/authToken');

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(404).json({ message: 'Não existe um token!' });
  }

  const decoded = await decodedToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Usuário não autorizado!' });
  }

  req.data = decoded;

  next();
};

module.exports = authMiddleware;
