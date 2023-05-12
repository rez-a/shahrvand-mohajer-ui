import Cookies from 'js-cookie';
import { AUTH_TOKEN_SHAHRVAND } from './handlerAuthorazation/authTokenKey';

const setHeaderRequest = () => {
  return !!Cookies.get(AUTH_TOKEN_SHAHRVAND)
    ? {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get(AUTH_TOKEN_SHAHRVAND)}`,
      }
    : { 'Content-Type': 'application/json' };
};

export default setHeaderRequest;
