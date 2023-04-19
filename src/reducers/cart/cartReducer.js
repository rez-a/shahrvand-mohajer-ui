import cartSummaryCalculator from 'helper/cartSummaryCalculator';
import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE,
  INCREASE,
  REMOVE_FROM_CART,
} from './actionTypes';

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
          (product) => product.Id !== action.payload.productId
        );
        console.log(newProducts);
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
          product.Id === action.payload.productId
            ? { ...product, quantity: product.quantity + 1 }
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
          product.Id === action.payload.productId
            ? { ...product, quantity: product.quantity - 1 }
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
  }
  cartSummaryCalculator(newCart);
  return {
    ...state,
    cart: newCart,
  };
};
