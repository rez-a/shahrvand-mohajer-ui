import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { AUTH_TOKEN_SHAHRVAND } from './authTokenKey';

const decodeToken = (token = null) => {
  const tokenDecoded = !!token
    ? jwt_decode(token)
    : !!Cookies.get(AUTH_TOKEN_SHAHRVAND)
    ? jwt_decode(Cookies.get(AUTH_TOKEN_SHAHRVAND))
    : null;

  const destrucToken = () => {
    const { mobile, name, exp } = tokenDecoded;
    return { mobile, name, exp };
  };

  return !!tokenDecoded ? destrucToken() : null;
};

export default decodeToken;
