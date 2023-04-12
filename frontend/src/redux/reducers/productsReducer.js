
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log("type",type);
  switch (type) {
    case "SELECTED_PRODUCT":
      return { ...state, ...payload };

    default:
      return state;
  }
};
