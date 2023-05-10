import { AUTH_TOKEN_SHAHRVAND } from 'helper/handlerAuthorazation/authTokenKey';
import Cookies from 'js-cookie';
import { handleRequest } from 'services';

const setHeaders = () => {
  return !!Cookies.get(AUTH_TOKEN_SHAHRVAND)
    ? {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get(AUTH_TOKEN_SHAHRVAND)}`,
      }
    : { 'Content-Type': 'application/json' };
};

export const fetcher = async (url) => {
  const response = await handleRequest({
    url,
    method: 'get',
    headers: setHeaders(),
  });
  return response.data;
};
