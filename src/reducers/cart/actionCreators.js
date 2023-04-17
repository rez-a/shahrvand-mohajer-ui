import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE,
  INCREASE,
  REMOVE_FROM_CART,
} from './actionTypes';

export function addToCart(product, vendor) {
  return {
    type: ADD_TO_CART,
    payload: { ...vendor, products: [{ ...product, quantity: 1 }] },
  };
}

export function removeFromCart(productId, vendorErpCode) {
  return {
    type: REMOVE_FROM_CART,
    payload: { productId, vendorErpCode },
  };
}

export function increase(productId, vendorErpCode) {
  return {
    type: INCREASE,
    payload: { productId, vendorErpCode },
  };
}

export function decrease(productId, vendorErpCode) {
  return {
    type: DECREASE,
    payload: { productId, vendorErpCode },
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
