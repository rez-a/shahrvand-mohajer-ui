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
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [
          ...state.cart.filter(
            (product) => product.Id !== action.payload
          ),
        ],
      };
    case INCREASE:
      return {
        ...state,
        cart: [
          ...state.cart.map((product) =>
            product.Id === action.payload
              ? { ...product, quantity: product.quantity + 1 }
              : { ...product }
          ),
        ],
      };
    case DECREASE:
      return {
        ...state,
        cart: [
          ...state.cart.map((product) =>
            product.Id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : { ...product }
          ),
        ],
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
  }
};
