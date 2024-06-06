import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const DedicateSlice = createSlice({
  name: "Dedicate",
  initialState,
  reducers: {
    dedicateAdd: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { dedicateAdd } = DedicateSlice.actions;

export default DedicateSlice.reducer;
