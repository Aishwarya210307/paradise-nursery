import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
  },

  reducers: {
    addItem(state, action) {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    removeItem(state, action) {
      const productId = action.payload;

      state.items = state.items.filter(
        (item) => item.id !== productId
      );
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;

      const item = state.items.find(
        (product) => product.id === id
      );

      if (!item) return;

      const newQuantity = Number(quantity);

      if (!Number.isFinite(newQuantity) || newQuantity <= 0) {
        state.items = state.items.filter(
          (product) => product.id !== id
        );
      } else {
        item.quantity = Math.floor(newQuantity);
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
