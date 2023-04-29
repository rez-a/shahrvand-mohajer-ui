import { handleRequest } from 'services';

export const fetcher = async (url) => {
  const response = await handleRequest({ url, method: 'get' });
  return response.data.data;
};
