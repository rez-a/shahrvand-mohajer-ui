import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE,
  INCREASE,
  REMOVE_FROM_CART,
} from './actionTypes';

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const availableInCart = !!state.cart.find(
        (vendor) =>
          vendor.vendorErpCode === action.payload.vendorErpCode
      );

      return {
        ...state,
        cart: availableInCart
          ? [
              ...state.cart.map((vendor) =>
                vendor.vendorErpCode === action.payload.vendorErpCode
                  ? {
                      ...vendor,
                      products: [
                        ...vendor.products,
                        { ...action.payload.products },
                      ],
                    }
                  : { ...vendor }
              ),
            ]
          : [...state.cart, { ...action.payload }],
      };
    case REMOVE_FROM_CART:
      const vendor = state.cart.find(
        (vendor) =>
          vendor.vendorErpCode === action.payload.vendorErpCode
      );
      return {
        ...state,
        cart:
          vendor.products.length > 1
            ? [
                ...state.cart.map((vendor) =>
                  vendor.vendorErpCode ===
                  action.payload.vendorErpCode
                    ? {
                        ...vendor,
                        products: vendor.products.filter(
                          (product) =>
                            product.Id !== action.payload.productId
                        ),
                      }
                    : { ...vendor }
                ),
              ]
            : [
                ...state.cart.filter(
                  (vendor) =>
                    vendor.vendorErpCode !==
                    action.payload.vendorErpCode
                ),
              ],
      };
    case INCREASE:
      return {
        ...state,
        cart: state.cart.map((vendor) =>
          vendor.vendorErpCode === action.payload.vendorErpCode
            ? {
                ...vendor,
                products: vendor.products.map((product) =>
                  product.Id === action.payload.productId
                    ? { ...product, quantity: product.quantity + 1 }
                    : { ...product }
                ),
              }
            : { ...vendor }
        ),
      };
    case DECREASE:
      return {
        ...state,
        cart: state.cart.map((vendor) =>
          vendor.vendorErpCode === action.payload.vendorErpCode
            ? {
                ...vendor,
                products: vendor.products.map((product) =>
                  product.Id === action.payload.productId
                    ? { ...product, quantity: product.quantity - 1 }
                    : { ...product }
                ),
              }
            : { ...vendor }
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
  }
};
