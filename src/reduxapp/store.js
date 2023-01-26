import imageSlice from "@/features/imageSlice";
import mainSlice from "@/features/main/mainSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    mainState: mainSlice,
    imageUrl: imageSlice,
  },
});
