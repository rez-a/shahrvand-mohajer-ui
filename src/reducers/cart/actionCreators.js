import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE,
  INCREASE,
  REMOVE_FROM_CART,
} from './actionTypes';

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
}

export function increase(productId) {
  return {
    type: INCREASE,
    payload: productId,
  };
}

export function decrease(productId) {
  return {
    type: DECREASE,
    payload: productId,
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
