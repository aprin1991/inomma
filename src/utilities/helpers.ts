export const removeProduct = (id, products) => {
  return products?.filter((el) => el?.id !== id);
};
