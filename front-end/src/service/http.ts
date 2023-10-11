import { api } from './api';

export async function getAllArticles(query: string, offset: number) {
  try {
    const result = await api.get(
      `/search/${query}?page=${offset}&pageSize=10&apiKey=${process.env.NEXT_PUBLIC_APIKEY_CORE}`,
    );

    return result.data;
  } catch (error) {
    return error;
  }
}
