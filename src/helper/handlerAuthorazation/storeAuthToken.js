import { AUTH_TOKEN_SHAHRVAND } from './authTokenKey';
import decodeToken from './decodeToken';
import Cookies from 'js-cookie';
import removeAuthToken from './removeAuthToken';

const storeAuthToken = (token) => {
  if (!token) {
    removeAuthToken(AUTH_TOKEN_SHAHRVAND);
  } else {
    const { exp } = decodeToken(token);
    const expires = Math.ceil(
      (exp * 1000 - Date.now()) / (1000 * 3600 * 24)
    );
    Cookies.set(AUTH_TOKEN_SHAHRVAND, token, { expires });
  }
};

export default storeAuthToken;
