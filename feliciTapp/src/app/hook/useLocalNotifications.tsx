import { StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import { useDispatch, useSelector } from "react-redux";

export const useLocalNotifications = (data: any) => {
  const dispatch = useDispatch();

  const {
    changeTheme,
    userInfo: { name },
  } = useSelector((state: any) => state);

  for (let i = changeTheme.phraseIndex; i < data.length; i++) {
    const programe = data[i];
    const programéNotifications = async () => {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Hola " + name + ", hoy recuerda...",
          body: programe?.phrase,
          data: {
            id: programe.id,
          },
        },
        trigger: {
          hour: 8, // Hora en la que quieres enviar la notificación (8 a.m.)
          minute: 0, // Minuto en el que quieres enviar la notificación (0 para empezar de la hora en punto)
          repeats: true, // Para que se repita diariamente
        },
      });
    };

    programéNotifications();
  }
};

const styles = StyleSheet.create({});
