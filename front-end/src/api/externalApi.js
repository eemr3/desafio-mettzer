import axios from 'axios';

export const ExternalApi = axios.create({
  baseURL: 'https://core.ac.uk:443/api-v2/articles',
});
