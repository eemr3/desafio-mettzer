import Cookies from 'js-cookie';
import { api } from '../api/api';
import { ExternalApi } from '../api/externalApi';

export const requestSignIn = async (values) => {
  const response = await api.post('/login', values);

  return response.data;
};

export const getListArticle = async (query, page) => {
  const KEY = process.env.REACT_APP_APIKEY_CORE;
  const response = await ExternalApi.get(
    `/search/${query}?page=${page}&pageSize=10&apiKey=${KEY}`,
  );

  return response.data.data;
};

export const requestSaveFavorite = async (data) => {
  const token = Cookies.get('token');
  await api.post('/favorites', data, {
    headers: {
      authorization: token,
    },
  });
};

export const requestGetAllFavorites = async (page) => {
  const token = Cookies.get('token');
  const favoriteData = await api.get(`/favorites?page=${page}`, {
    headers: {
      authorization: token,
    },
  });
  const response = favoriteData.data.map((item) => ({
    authors: item.authors.map((a) => a.authors),
    _type: item._type,
    title: item.title,
    description: item.description,
    idFav: item.id,
    urls: item.urls.map((u) => u.url),
    id: item.idArticle,
  }));
  return response;
};

export const requestDeleteFavorite = async (id) => {
  console.log(id);
  const token = Cookies.get('token');
  const response = await api.delete(`/favorites/${id}`, {
    headers: {
      authorization: token,
    },
  });

  return response;
};
