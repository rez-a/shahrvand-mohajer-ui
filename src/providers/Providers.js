import React from 'react';
import LoadingProvider from 'contexts/LoadingProvider';
import CartProvider from 'contexts/CartProvider';
import UserProvider from 'contexts/UserProvider';
import CostProvider from 'contexts/CostProvider';
import LogoutHandlerProvider from 'contexts/LogoutHandlerProvider';
import DimmerProvider from 'contexts/DimmerProvider';
import ObservedMessageProvider from 'contexts/ObservedMessageProvider';

const Providers = ({ children }) => {
  return (
    <ObservedMessageProvider>
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
    </ObservedMessageProvider>
  );
};

Providers.propTypes = {};

export default Providers;
