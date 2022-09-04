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
  console.log(page);
  const token = Cookies.get('token');
  const response = await api.get(`/favorites?page=${page === 0 ? 1 : page}`, {
    headers: {
      authorization: token,
    },
  });

  return response.data;
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
