import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: undefined,
};

export const changeFavorite = createSlice({
  name: "changeFavorite",
  initialState,
  reducers: {
    changeLove: (state, action) => {
      state.favorite = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLove } = changeFavorite.actions;

export default changeFavorite.reducer;
