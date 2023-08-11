// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
		itemInCart.price = 25.5
      } else {
        state.cart.push({ ...action.payload, quantity: 1, price: 25.6 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
		
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
});
// Selector
export const CartSelector = state => state.cart

// Actions
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = CartSlice.actions;

// Reducer
export default CartSlice.reducer;
