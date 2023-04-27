import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import decodeToken from 'helper/handlerAuthorazation/decodeToken';

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(decodeToken());
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {};

export default UserProvider;
