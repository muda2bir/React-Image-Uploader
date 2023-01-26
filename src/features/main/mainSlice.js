import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "selecting",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setMainState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMainState } = mainSlice.actions;

export default mainSlice.reducer;
