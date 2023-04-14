import { handleRequest } from 'services';

export const fetcher = async (url) => {
  const response = await handleRequest({ url });
  return response.data.data;
};
