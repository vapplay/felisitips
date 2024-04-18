import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  images: [1],
};

export const swiperSlice = createSlice({
  name: "swiper",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.images.unshift(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addImage } = swiperSlice.actions;

export default swiperSlice.reducer;
