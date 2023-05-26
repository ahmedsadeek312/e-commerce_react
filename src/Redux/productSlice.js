import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartProducts: (state, action) => {
      state.cartProducts = [...state.cartProducts, action.payload];
    },
    removeProduct: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export default cartSlice.reducer;
export const { setCartProducts, removeProduct } = cartSlice.actions;
