const { Favorite, Author, Url } = require('../database/models');
const errorBase = require('../utils/errorBase');

const createFavorite = async (data) => {

  const { authors, type, title, description, urls, id, idArticle } = data;

  const favorite = await Favorite.create({
    title,
    description,
    userId: id,
    idArticle,
    type,
  }); 

  const favorite = await Favorite.create({ title, description, type, userId: id });

  const resultAuthors = await Promise.all(
    authors.map(async (author) => {
      return await Author.create({ authors: author, favoriteId: favorite.id });
    }),
  );

  const resultUrls = await Promise.all(
    urls.map(async (url) => {
      return await Url.create({ url, favoriteId: favorite.id });
    }),
  );

  return {
    authors: resultAuthors,
    type: favorite.type,
    title: favorite.title,
    description: favorite.description,
    urls: resultUrls,
  };
};

const getAllFavorites = async () => {
  const favorites = await Favorite.findAll({
    include: [
      { model: Author, as: 'authors' },
      { model: Url, as: 'urls' },
    ],
  });

  return favorites;
};

const destroyFovorite = async (id) => {
  const existFavorite = await Favorite.findOne({ where: { id } });
  if (!existFavorite) {
    throw errorBase(404, 'Favorito não encontrado');
  }

  await Favorite.destroy({ where: { id } });
};

module.exports = {
  createFavorite,
  getAllFavorites,
  destroyFovorite,
};
