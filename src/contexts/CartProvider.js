import React from 'react';
import PropTypes from 'prop-types';
import { createContext } from 'react';
import { useReducer } from 'react';
import { cartReducer } from 'reducers/cart/cartReducer';
import getFromLS from 'helper/LS/getFromLS';

const initialState = {
  cart: getFromLS('SHAHRVAND_CART', []),
};
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {};

export default CartProvider;
