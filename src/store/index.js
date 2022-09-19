import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { menuListSlice } from "./menuList";
import { cartListSlice } from "./cartList";

const rootReducer = combineReducers({
  menuList: menuListSlice.reducer,
  cartList: cartListSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
