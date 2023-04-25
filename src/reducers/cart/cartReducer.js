import cartSummaryCalculator from 'helper/cartSummaryCalculator';
import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE,
  INCREASE,
  REMOVE_FROM_CART,
} from './actionTypes';
import setToLS from 'helper/LS/setToLS';

export const cartReducer = (state, action) => {
  const vendor = state.cart.find(
    (vendor) => vendor.vendorErpCode === action.payload.vendorErpCode
  );
  let newCart = [];
  switch (action.type) {
    case ADD_TO_CART:
      {
        const newVendor = !!vendor
          ? {
              ...vendor,
              products: [
                ...vendor.products,
                { ...action.payload.products.at(-1) },
              ],
            }
          : { ...action.payload };

        newCart = !!vendor
          ? state.cart.map((vendor) =>
              vendor.vendorErpCode === newVendor.vendorErpCode
                ? newVendor
                : vendor
            )
          : [...state.cart, newVendor];
      }
      break;
    case REMOVE_FROM_CART:
      {
        const newProducts = vendor.products.filter(
          (product) => product.cartId !== action.payload.cartId
        );
        const newVendor = { ...vendor, products: newProducts };

        newCart = !!newVendor.products.length
          ? state.cart.map((vendor) =>
              vendor.vendorErpCode === action.payload.vendorErpCode
                ? newVendor
                : vendor
            )
          : state.cart.filter(
              (vendor) =>
                vendor.vendorErpCode !== action.payload.vendorErpCode
            );
      }
      break;

    case INCREASE:
      {
        const newProducts = vendor.products.map((product) =>
          product.cartId === action.payload.cartId
            ? {
                ...product,
                quantity: product.quantity + Number(product.UnitFew),
              }
            : { ...product }
        );
        const newVendor = { ...vendor, products: newProducts };

        newCart = state.cart.map((vendor) =>
          vendor.vendorErpCode === newVendor.vendorErpCode
            ? newVendor
            : vendor
        );
      }
      break;

    case DECREASE:
      {
        const newProducts = vendor.products.map((product) =>
          product.cartId === action.payload.cartId
            ? {
                ...product,
                quantity: product.quantity - Number(product.UnitFew),
              }
            : { ...product }
        );
        const newVendor = { ...vendor, products: newProducts };

        newCart = state.cart.map((vendor) =>
          vendor.vendorErpCode === newVendor.vendorErpCode
            ? newVendor
            : vendor
        );
      }
      break;

    case CLEAR_CART:
      break;
  }
  cartSummaryCalculator(newCart);
  setToLS('SHAHRVAND_CART', newCart);
  return {
    ...state,
    cart: newCart,
  };
};
