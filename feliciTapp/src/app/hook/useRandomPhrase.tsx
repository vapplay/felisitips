import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePhrase, changePhraseIndex } from "../redux/changeThemeSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocalNotifications } from "./useLocalNotifications";

export const useRandomPhrase = () => {
  const getData = async () => {
    const { data } = await axios.get(
      "https://felisitips-back.onrender.com/get-phrase"
    );
    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getData,
  });

  const dispatch = useDispatch();
  const { randomPhrase, phraseIndex } = useSelector(
    (state: any) => state.changeTheme
  );

  const newPhrase = () => {
    if (!isLoading && !error) {
      const nexPhras = data[phraseIndex];
      dispatch(changePhrase(nexPhras));
      dispatch(changePhraseIndex());
    }
  };

  useEffect(() => {
    newPhrase();
  }, [isLoading]);

  return { randomPhrase };
};
