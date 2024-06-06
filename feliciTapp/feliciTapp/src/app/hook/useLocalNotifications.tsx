import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const getPhrases = async () => {
  const { data } = await axios.get(
    "https://felisitips-back.onrender.com/get-phrase"
  );
  return data;
};

const saveLastNotificationDetails = async (details: {
  title: string;
  body: string;
  id: number;
}) => {
  await AsyncStorage.setItem(
    "lastNotificationDetails",
    JSON.stringify(details)
  );
};

const getLastNotificationDetails = async (): Promise<{
  title: string;
  body: string;
  id: number;
} | null> => {
  const details = await AsyncStorage.getItem("lastNotificationDetails");
  return details ? JSON.parse(details) : null;
};

const saveLastPhraseIndex = async (index: number) => {
  await AsyncStorage.setItem("lastPhraseIndex", JSON.stringify(index));
};

const getLastPhraseIndex = async (): Promise<number> => {
  const index = await AsyncStorage.getItem("lastPhraseIndex");
  return index ? JSON.parse(index) : -1;
};

const programNotification = async (
  userName: string,
  phrase: string,
  id: number
) => {
  const currentDate = new Date();
  const notificationDate = new Date(currentDate);
  notificationDate.setDate(currentDate.getDate() + 1);
  notificationDate.setHours(7, 0, 0, 0);

  const notificationDetails = {
    title: `Hola ${userName}, hoy recuerda...`,
    body: phrase,
    id,
  };

  await Notifications.scheduleNotificationAsync({
    content: notificationDetails,
    trigger: {
      date: notificationDate,
    },
  });

  await saveLastNotificationDetails(notificationDetails);
};

export const useDailyNotifications = (userName: string) => {
  const [lastNotificationDetails, setLastNotificationDetails] = useState<{
    title: string;
    body: string;
    id: number;
  } | null>(null);
  const [lasPhrase, setLasPhrase] = useState<any | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["phrases"],
    queryFn: getPhrases,
  });

  useEffect(() => {
    const checkAndScheduleNotification = async () => {
      const lastDetails = await getLastNotificationDetails();
      setLastNotificationDetails(lastDetails);

      if (lastDetails && data) {
        const notificationPhrase = data.find(
          (x: any) => x.id === lastDetails.id
        );
        if (notificationPhrase) setLasPhrase(notificationPhrase);
      }

      const lastNotificationDate = await AsyncStorage.getItem(
        "lastNotificationDate"
      );
      const today = new Date().toISOString().split("T")[0]; // Formato de fecha YYYY-MM-DD

      if (lastNotificationDate !== today && data && !isLoading && !error) {
        let lastIndex = await getLastPhraseIndex();
        let index = lastIndex + 1;

        if (index >= data.length) {
          index = 0; // Reinicia el índice si supera la cantidad de frases disponibles
        }

        const phraseData = data[index];

        if (phraseData) {
          await programNotification(userName, phraseData.phrase, phraseData.id);
          await AsyncStorage.setItem("lastNotificationDate", today);
          await saveLastPhraseIndex(index);
        }
      }
    };

    checkAndScheduleNotification();
  }, [data, isLoading, error, userName]);

  return { lasPhrase, lastNotificationDetails };
};
