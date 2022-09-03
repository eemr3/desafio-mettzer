const Service = require('../services/Favorite.service');

const createFavorite = async (req, res) => {
  const { authors, idArticle, type, title, description, urls } = req.body;
  const { id } = req.data;
  
  const favorite = await Service.createFavorite({
    authors,
    idArticle,
    authors,
    type,
    title,
    description,
    urls,
    id,
  });

  return res.status(201).json(favorite);
};

const getAllFavorites = async (_req, res) => {
  const favorites = await Service.getAllFavorites();

  return res.status(200).json(favorites);
};

const destroyFovorite = async (req, res) => {
  try {
    await Service.destroyFovorite(req.params.id);
    return res.status(200).json({ message: 'Desfavoritado com sucesso' });
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  createFavorite,
  getAllFavorites,
  destroyFovorite,
};
