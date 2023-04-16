import React from 'react';
import PropTypes from 'prop-types';
import LoadingProvider from 'context/LoadingProvider';

const Providers = ({ children }) => {
  return <LoadingProvider>{children}</LoadingProvider>;
};

Providers.propTypes = {};

export default Providers;
