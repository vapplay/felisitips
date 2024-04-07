import { createSlice } from "@reduxjs/toolkit";
import { theme } from "../theme/theme";

const initialState = {
  theme,
};

export const themeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme.home.backgroundImage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
