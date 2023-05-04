import React from 'react';
import PropTypes from 'prop-types';
import LoadingProvider from 'contexts/LoadingProvider';
import CartProvider from 'contexts/CartProvider';
import UserProvider from 'contexts/UserProvider';
import CostProvider from 'contexts/Cost';

const Providers = ({ children }) => {
  return (
    <CostProvider>
      <UserProvider>
        <CartProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </CartProvider>
      </UserProvider>
    </CostProvider>
  );
};

Providers.propTypes = {};

export default Providers;
