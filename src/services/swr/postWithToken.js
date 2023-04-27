import { AUTH_TOKEN_SHAHRVAND } from 'helper/handlerAuthorazation/authTokenKey';
import Cookies from 'js-cookie';
import { handleRequest } from 'services';

export const postWithToken = async (url) => {
  const response = await handleRequest({
    url,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get(AUTH_TOKEN_SHAHRVAND)}`,
    },
  });
  return response.data.data;
};
