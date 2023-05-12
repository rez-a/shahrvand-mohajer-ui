import { handleRequest } from 'services';

export const updater = async (url, data) => {
  const response = await handleRequest({
    url,
    method: 'patch',
    data,
  });
  return response.data;
};
