import { removeProduct } from "utilities/helpers";
import productsActionTypes from "./products.types";
const INITIAL_STATE = {
  products: [],
};
const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsActionTypes.ADD_TO_PRODUCTS:
      return { ...state, products: [...state.products, action.payload] };
    case productsActionTypes.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case productsActionTypes.REMOVE_ITEM:
      const products = removeProduct(action.payload, state.products);

      return { ...state, products };
    default:
      return state;
  }
};

export default productsReducer;
