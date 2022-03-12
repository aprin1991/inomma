import { Action } from "history";
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
    default:
      return state;
  }
};

export default productsReducer;
