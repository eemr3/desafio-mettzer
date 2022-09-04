const { Favorite, Author, Url } = require('../database/models');
const errorBase = require('../utils/errorBase');

const createFavorite = async (data) => {
  const { authors, _type, title, description, urls, id, idArticle } = data;
  console.log(_type);
  const favorite = await Favorite.create({
    title,
    description,
    userId: id,
    idArticle,
    _type,
  });

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
    _type: favorite._type,
    title: favorite.title,
    description: favorite.description,
    urls: resultUrls,
    idArticle: favorite.idArticle,
  };
};

const getAllFavorites = async (page) => {
  const offset = (page - 1) * 10;
  const limit = 10;
  const favorites = await Favorite.findAll({
    offset,
    limit,
    include: [
      { model: Author, as: 'authors', attributes: { exclude: ['id', 'favoriteId'] } },
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
