import { api } from '../api/api';
import { ExternalApi } from '../api/externalApi';

export const requestSignIn = async (values) => {
  const response = await api.post('/login', values);

  return response.data;
};

export const getListArticle = async (query, page, key) => {
  const response = await ExternalApi.get(
    `/search/${query}?page=${page}&pageSize=10&apiKey=${key}`,
  );
  console.log(response);

  return response.data.data;
};
