import { createSlice } from "@reduxjs/toolkit";
type PhrasesType = {
  id: number;
  phrase: string;
  date: string;
  by:string
};

type StateType = {
  Phrases: PhrasesType[];
};

const initialState: StateType = {
  Phrases: [],
};


export const FavoritePhraseSlice = createSlice({
  name: "FavoritePhraseSlice",
  initialState,
  reducers: {
    addFavoritePhrase: (state, action) => {
      const newPhrase = action.payload;
      console.log(newPhrase);

      const existingPhrase = state.Phrases.find(
        (phrase) => phrase.id === newPhrase.id
      );
      if (!existingPhrase) {
        state.Phrases.push({
          ...newPhrase,
          date: JSON.stringify(new Date()),
        });
      }
    },

    removeFavoritePhrase: (state, action) => {
      const idToRemove = action.payload;
      state.Phrases = state.Phrases.filter(
        (phrase) => phrase.id !== idToRemove
      );
    },
  },
});

export const { addFavoritePhrase, removeFavoritePhrase } =
  FavoritePhraseSlice.actions;

export default FavoritePhraseSlice.reducer;
