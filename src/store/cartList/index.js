import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: {},
  total: 0,
};

export const cartListSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.amount[action.payload.id] = state.amount[action.payload.id]
        ? state.amount[action.payload.id] + 1
        : 1;
      state.total += action.payload.price;
    },
    deleteCart: (state, action) => {
      state.total =
        state.total - action.payload.price * state.amount[action.payload.id];
      delete state.amount[action.payload.id];
    },
    plusCart: (state, action) => {
      state.amount[action.payload.id] = state.amount[action.payload.id]
        ? state.amount[action.payload.id] + 1
        : 1;
      state.total += action.payload.price;
    },
    minusCart: (state, action) => {
      state.amount[action.payload.id] =
        state.amount[action.payload.id] > 1
          ? state.amount[action.payload.id] - 1
          : 1;
      state.total -= action.payload.price;
    },
  },
});
export const cartListActions = cartListSlice.actions;
