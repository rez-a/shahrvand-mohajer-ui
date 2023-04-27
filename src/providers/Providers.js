import React from 'react';
import PropTypes from 'prop-types';
import LoadingProvider from 'contexts/LoadingProvider';
import CartProvider from 'contexts/CartProvider';
import UserProvider from 'contexts/UserProvider';

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>
        <LoadingProvider>{children}</LoadingProvider>
      </CartProvider>
    </UserProvider>
  );
};

Providers.propTypes = {};

export default Providers;
