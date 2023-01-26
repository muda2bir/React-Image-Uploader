import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const imageSlice = createSlice({
  name: "imageUrl",
  initialState,
  reducers: {
    setImageUrl: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setImageUrl } = imageSlice.actions;

export default imageSlice.reducer;
