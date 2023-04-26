import { handleRequest } from 'services';

export const postFetcher = async (url, data) => {
  const response = await handleRequest({ url, method: 'post', data });
  return response.data.data;
};
