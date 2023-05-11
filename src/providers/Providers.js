import React from 'react';
import LoadingProvider from 'contexts/LoadingProvider';
import CartProvider from 'contexts/CartProvider';
import UserProvider from 'contexts/UserProvider';
import CostProvider from 'contexts/CostProvider';
import LogoutHandlerProvider from 'contexts/LogoutHandlerProvider';

const Providers = ({ children }) => {
  return (
    <CostProvider>
      <UserProvider>
        <LogoutHandlerProvider>
          <CartProvider>
            <LoadingProvider>{children}</LoadingProvider>
          </CartProvider>
        </LogoutHandlerProvider>
      </UserProvider>
    </CostProvider>
  );
};

Providers.propTypes = {};

export default Providers;
