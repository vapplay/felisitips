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
    deleteSwipedImage: (state, action) => {
      const idToRemove = action.payload;
      state.images = state.images.filter(
        (image: string) => image !== idToRemove
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addImage, deleteSwipedImage } = swiperSlice.actions;

export default swiperSlice.reducer;
