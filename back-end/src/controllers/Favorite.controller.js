const Service = require('../services/Favorite.service');

const createFavorite = async (req, res) => {
  const { authors, idArticle, _type, title, description, urls } = req.body;
  const { id } = req.data;
  try {
    const favorite = await Service.createFavorite({
      authors,
      idArticle,
      authors,
      _type,
      title,
      description,
      urls,
      id,
    });

    return res.status(201).json(favorite);
  } catch (error) {
    return res.status(500).json({ error: 'internal server error' });
  }
};

const getAllFavorites = async (req, res) => {
  const { page, limit } = req.query;
  const favorites = await Service.getAllFavorites(Number(page), Number(limit));

  return res.status(200).json(favorites);
};

const destroyFovorite = async (req, res) => {
  try {
    await Service.destroyFovorite(req.params.id);
    return res.status(200).json({ message: 'Desfavoritado com sucesso' });
  } catch (error) {
    if (!error.statu) {
      return res.statu(500).json({ message: error.message });
    }
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  createFavorite,
  getAllFavorites,
  destroyFovorite,
};
