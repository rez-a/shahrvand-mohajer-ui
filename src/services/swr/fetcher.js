import setHeaderRequest from 'helper/setHeaderRequest';
import { handleRequest } from 'services';

export const fetcher = async (url) => {
  const response = await handleRequest({
    url,
    method: 'get',
    headers: setHeaderRequest(),
  });
  return response;
};
