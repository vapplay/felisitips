import * as Notifications from "expo-notifications";
import { useDispatch, useSelector } from "react-redux";
import { changePhraseIndex } from "../redux/changeThemeSlice";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useLocalNotifications = () => {
  const dispatch = useDispatch();
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

  const {
    changeTheme,
    userInfo: { name },
  } = useSelector((state: any) => state);

  useEffect(() => {
    if (!isLoading && data) {
      const currentDate = new Date();

      const scheduleNotifications = async (index: number) => {
        const programe = data[index];
        const notificationDate = new Date(currentDate);
        notificationDate.setDate(currentDate.getDate() + 1);
        notificationDate.setHours(7, 0, 0, 0);

        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Hola " + name + ", hoy recuerda...",
            body: programe?.phrase,
            data: {
              id: programe.id,
            },
          },
          trigger: {
            date: notificationDate,
          },
        });

        // Incrementa el índice después de programar la notificación
        dispatch(changePhraseIndex());
      };

      for (let i = changeTheme.phraseIndex; i < data.length; i++) {
        // Utiliza setTimeout para agregar un retraso de 5 segundos entre cada notificación
        console.log(i);

        setTimeout(() => {
          scheduleNotifications(i);
        }, i * 20000); // 5000 milisegundos = 5 segundos
      }
    }
  }, [data, isLoading]);
};
