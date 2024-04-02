import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { items: [], totalCount: 0, totalPrice: 0, totalPaid: 0 };

const recalculateTotals = (state) => {
  state.totalPrice = 0;
  state.totalPaid = 0;
  state.totalCount = state.items.length;
  state.items.map((item) => {
    state.totalPaid +=
      item.priceWithDiscount !== 0 ? item.priceWithDiscount : item.price;
    state.totalPrice +=
      item.bn  !== 0 ? item.priceWithDiscount : item.price;
  });
};

const shoppingCartSlice = createSlice({
  name: "shoppingCartSlice",
  initialState: INITIAL_STATE,
  reducers: {
    addNewItem(state, action) {
      state.items.push({ ...action.payload, count: 1 });
      recalculateTotals(state);
    },
    increaseCount: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.count++;
        }
        return state;
      });
      return recalculateTotals(state);
    },
    decreaseCount: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.count--;
        }
        return state;
      });
      return recalculateTotals(state);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      return recalculateTotals(state);
    },
  },
});

export const { addNewItem, increaseCount, decreaseCount, removeItem } =
  shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
