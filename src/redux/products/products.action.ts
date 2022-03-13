import productsActionTypes from "./products.types";

export const addToProducts = (item) => {
  return {
    type: productsActionTypes.ADD_TO_PRODUCTS,
    payload: item,
  };
};
export const setProducts = (products) => {
  return {
    type: productsActionTypes.GET_PRODUCTS,
    payload: products,
  };
};
export const removeItem = (id) => {
  console.log("redux products", id);
  return {
    type: productsActionTypes.REMOVE_ITEM,
    payload: id,
  };
};
