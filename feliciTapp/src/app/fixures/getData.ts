import axios from "axios";

export const getData = async (url: string) => {
  const { data } = await axios.get(
    `https://felisitips-back.onrender.com/${url}`
  );
  return data;
};
