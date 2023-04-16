import React from 'react';
import PropTypes from 'prop-types';
import LoadingProvider from 'contexts/LoadingProvider';
import CartProvider from 'contexts/CartProvider';

const Providers = ({ children }) => {
  return (
    <CartProvider>
      <LoadingProvider>{children}</LoadingProvider>
    </CartProvider>
  );
};

Providers.propTypes = {};

export default Providers;
