import { createSlice } from "@reduxjs/toolkit";
import { theme } from "../theme/theme";
import { phrase } from "../db/phrases";

const initialState = {
  backgroundImage: "https://felicitips.com/themes/theme1.jpg",
  randomPhrase: phrase[0],
  favorite: undefined,
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
    changeFavorites: (state, action) => {
      state.favorite = action.payload;
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
