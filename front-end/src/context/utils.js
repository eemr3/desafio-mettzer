import { api } from '../api/api';

export const requestSignIn = async (values) => {
  const response = await api.post('/login', values);

  return response.data;
};
