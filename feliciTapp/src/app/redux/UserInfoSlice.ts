import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addName: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addName } = userInfoSlice.actions;

export default userInfoSlice.reducer;
