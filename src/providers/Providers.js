import React from 'react';
import LoadingProvider from 'contexts/LoadingProvider';
import CartProvider from 'contexts/CartProvider';
import UserProvider from 'contexts/UserProvider';
import CostProvider from 'contexts/CostProvider';
import LogoutHandlerProvider from 'contexts/LogoutHandlerProvider';
import DimmerProvider from 'contexts/DimmerProvider';

const Providers = ({ children }) => {
  return (
    <CostProvider>
      <UserProvider>
        <LogoutHandlerProvider>
          <CartProvider>
            <DimmerProvider>
              <LoadingProvider>{children}</LoadingProvider>
            </DimmerProvider>
          </CartProvider>
        </LogoutHandlerProvider>
      </UserProvider>
    </CostProvider>
  );
};

Providers.propTypes = {};

export default Providers;
