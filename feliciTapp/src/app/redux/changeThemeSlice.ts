import { createSlice } from "@reduxjs/toolkit";
import { theme } from "../theme/theme";
import { phrase } from "../db/phrases";

const initialState = {
  backgroundImage: theme.home.backgroundImage,
  randomPhrase: phrase[0],
  phraseIndex: 0,
};

export const changeThemeSlice = createSlice({
  name: "changeTheme",
  initialState,
  reducers: {
    changeThemeBackgroundImage: (state, action) => {
      state.backgroundImage = action.payload;
    },
    changePhrase: (state, action) => {
      console.log(action.payload);
      
      state.randomPhrase = action.payload;
    },
    changePhraseIndex: (state) => {
      state.phraseIndex++;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeThemeBackgroundImage, changePhrase, changePhraseIndex } =
  changeThemeSlice.actions;

export default changeThemeSlice.reducer;
