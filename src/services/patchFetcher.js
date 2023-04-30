import { handleRequest } from 'services';

export const patchFetcher = async (url, data) => {
  const response = await handleRequest({
    url,
    method: 'patch',
    data,
  });
  return response.data;
};
