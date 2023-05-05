import { AUTH_TOKEN_SHAHRVAND } from 'helper/handlerAuthorazation/authTokenKey';
import removeAuthToken from 'helper/handlerAuthorazation/removeAuthToken';
import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { createContext } from 'react';

export const LogoutContext = createContext();
const LogoutHandlerProvider = ({ children }) => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const accessRoutesUser = ['profile', 'shipping'];

  const logoutHandler = () => {
    console.log('logout');
    removeAuthToken(AUTH_TOKEN_SHAHRVAND);
    setUser(null);
    const result = [];
    for (let accessRoute of accessRoutesUser)
      if (location.pathname.includes(accessRoute)) result.push(true);

    if (result.includes(true)) navigate('/');
  };

  return (
    <LogoutContext.Provider value={{ logoutHandler }}>
      {children}
    </LogoutContext.Provider>
  );
};

export default LogoutHandlerProvider;
