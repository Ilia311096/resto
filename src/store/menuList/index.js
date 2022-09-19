import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  status: "idle", // 'success' 'error' 'loading'
};

export const menuListSlice = createSlice({
  name: "menuList",
  initialState,
  reducers: {
    startLoading: () => {
      return {
        entities: [],
        status: "loading",
      };
    },
    successLoading: (state, action) => {
      state.entities = action.payload;
      state.status = "success";
    },
    failLoading: () => {
      return {
        entities: [],
        status: "fail",
      };
    },
  },
});
export const menuListActions = menuListSlice.actions;
