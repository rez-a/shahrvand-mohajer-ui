import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE,
  INCREASE,
  REMOVE_FROM_CART,
} from './actionTypes';
import md5 from 'md5-hash';

export function addToCart(product, vendor) {
  return {
    type: ADD_TO_CART,
    payload: {
      ...vendor,
      products: [
        {
          ...product,
          quantity: Number(product.MinUnitFew),
          cartId: md5(`${product.ErpCode}${product.attrSelected}`),
        },
      ],
    },
  };
}

export function removeFromCart(cartId, vendorErpCode) {
  return {
    type: REMOVE_FROM_CART,
    payload: { cartId, vendorErpCode },
  };
}

export function increase(cartId, vendorErpCode) {
  return {
    type: INCREASE,
    payload: { cartId, vendorErpCode },
  };
}

export function decrease(cartId, vendorErpCode) {
  return {
    type: DECREASE,
    payload: { cartId, vendorErpCode },
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
