import React, { useEffect } from "react";
import { phrase } from "../db/phrases"; // Corrected import statement
import { useDispatch, useSelector } from "react-redux";
import { changePhrase, changePhraseIndex } from "../redux/changeThemeSlice";

export const useRandomPhrase = () => {
  const dispatch = useDispatch();
  const {
   randomPhrase, phraseIndex 
  } = useSelector((state: any) => state.changeTheme);

  const nexPhras = phrase[phraseIndex];
  const newPhrase = () => {
    dispatch(changePhrase(nexPhras));
    dispatch(changePhraseIndex());
  };

  useEffect(() => {
    newPhrase();
  }, []);

  return { randomPhrase };
};
