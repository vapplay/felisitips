import axios from "axios";

export const getData = async (url: string) => {
  const { data } = await axios.get(
    `https://felisitips-back-production.up.railway.app/${url}`
  );
  return data;
};
