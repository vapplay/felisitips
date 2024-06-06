import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    changeValue: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeValue } = onboardingSlice.actions;

export default onboardingSlice.reducer;
