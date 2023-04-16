import React from 'react';
import PropTypes from 'prop-types';
import { createContext } from 'react';
import { useState } from 'react';

export const LoadingContext = createContext();
const LoadingProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  return (
    <LoadingContext.Provider value={{ loader, setLoader }}>
      {children}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {};

export default LoadingProvider;
