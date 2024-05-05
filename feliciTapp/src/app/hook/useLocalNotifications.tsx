/* import * as Notifications from "expo-notifications";
import { useDispatch, useSelector } from "react-redux";
import { changePhraseIndex } from "../redux/changeThemeSlice";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

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
  let index = 0;

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

      for (let i = index; i < data.length; i++) {
        // Utiliza setTimeout para agregar un retraso de 5 segundos entre cada notificación
        console.log(i);

        setTimeout(() => {
          scheduleNotifications(i);
        }, i * 20000); // 5000 milisegundos = 5 segundos
      }
    }
  }, [data, isLoading]);
}; 

export const useLocalNotifications = () => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  const getData = async () => {
    const { data } = await axios.get(
      "https://felisitips-back.onrender.com/get-phrase"
    );
    return data;
  };

  const { data, isLoading } = useQuery({
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

      const scheduleNotification = (phrase: any, date: any) => {
        Notifications.scheduleNotificationAsync({
          content: {
            title: "Hola " + name + ", hoy recuerda...",
            body: phrase.phrase,
            data: {
              id: phrase.id,
            },
          },
          trigger: {
            date: date,
          },
        });
      };

      // Programar notificaciones para cada día
      for (let i = 0; i < 10; i++) {
        const notificationDate = new Date(currentDate);
        notificationDate.setDate(currentDate.getDate() + i);
        notificationDate.setHours(7, 0, 0, 0);
        scheduleNotification(data[currentIndex], notificationDate);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }
    }
  }, [data, isLoading, name]);
};

import * as Permissions from "expo-permissions";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Función para solicitar permiso para enviar notificaciones
async function askForNotificationPermission() {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (status !== "granted") {
    console.log("Permission to send notifications denied");
    return false;
  }
  return true;
}

// Función para obtener las frases desde una fuente externa (por ejemplo, una API)
async function getPhrases() {
  // Lógica para obtener las frases (puedes reemplazar esta parte con tu propia lógica)
  const phrases = Array.from({ length: 200 }, (_, i) => `Frase ${i + 1}`);
  return phrases;
}

// Función para programar notificaciones en lotes
async function scheduleNotificationsInBatches(phrases: any, startIndexa: any) {
  const batchSize = 50; // Tamaño del lote
  const totalBatches = Math.ceil(phrases.length / batchSize);

  for (let i = startIndex; i < totalBatches; i++) {
    const batchStartIndex = i * batchSize;
    const batchEndIndex = Math.min((i + 1) * batchSize, phrases.length);
    const batch = phrases.slice(batchStartIndex, batchEndIndex);

    const currentDate = new Date();
    const notificationDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + i, // Incrementa en un día cada vez
      7, // Hora de las notificaciones (7 a.m.)
      0,
      0,
      0
    );

    for (let j = 0; j < batch.length; j++) {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "Título de la notificación",
          body: batch[j],
        },
        trigger: {
          date: notificationDate,
        },
      });
    }
  }
}

// Función principal para usar las funciones anteriores
async function main() {
  const permissionGranted = await askForNotificationPermission();
  if (permissionGranted) {
    const phrases = await getPhrases();
    let startIndex = await AsyncStorage.getItem("notificationIndex");
    startIndex = startIndex ? parseInt(startIndex, 10) : 0;
    await scheduleNotificationsInBatches(phrases, startIndex);
    console.log("Notificaciones programadas exitosamente");
    // Guardar el índice actual en el almacenamiento local
    await AsyncStorage.setItem("notificationIndex", String(startIndex + 1));
  } else {
    console.log(
      "No se pueden programar notificaciones debido a permisos insuficientes"
    );
  }
}

main();
 */

import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

// Función para solicitar permisos para enviar notificaciones
async function askForNotificationPermission() {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== "granted") {
    const { status: newStatus } = await Notifications.requestPermissionsAsync();
    return newStatus === "granted";
  }
  return true;
}

// Función para obtener las frases de una fuente externa
const getPhrases = async () => {
  const response = await axios.get(
    "https://felisitips-back.onrender.com/get-phrase"
  );
  return response.data;
};

// Función para programar notificaciones
const scheduleDailyNotifications = async (
  phrases: any,
  startIndex: number,
  userName: string
) => {
  const currentDate = new Date();

  // Programar una notificación diaria por 10 días
  for (let i = 0; i < 10; i++) {
    const notificationDate = new Date(currentDate);
    notificationDate.setDate(currentDate.getDate() + i);
    notificationDate.setHours(10, 0, 0, 0); // Programar a las 10 de la mañana

    const phrase = phrases[startIndex];

    await Notifications.scheduleNotificationAsync({
      content: {
        title: `Hola ${userName}, frase del día`,
        body: phrase.phrase,
        data: {
          id: phrase.id,
        },
      },
      trigger: {
        date: notificationDate,
      },
    });

    // Avanzar el índice, asegurando que no se exceda el número total de frases
    startIndex = (startIndex + 1) % phrases.length;
  }

  // Guardar el índice actualizado en el almacenamiento local
  await AsyncStorage.setItem("notificationIndex", String(startIndex));
};

// Gancho para programar notificaciones al cargar el componente
export const useDailyNotifications = (userName: string = "") => {
  const [startIndex, setStartIndex] = useState(0);

  // Obtener el índice inicial del almacenamiento local
  useEffect(() => {
    const fetchInitialIndex = async () => {
      const storedIndex = await AsyncStorage.getItem("notificationIndex");
      setStartIndex(storedIndex ? parseInt(storedIndex) : 0);
    };
    fetchInitialIndex();
  }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["phrases"],
    queryFn: getPhrases,
  });

  // Programar notificaciones cuando se obtengan las frases
  useEffect(() => {
    if (!isLoading && data) {
      (async () => {
        const permissionGranted = await askForNotificationPermission();
        if (permissionGranted) {
          await scheduleDailyNotifications(data, startIndex, userName);
        } else {
          console.log("Permiso para notificaciones denegado");
        }
      })();
    }
  }, [data, isLoading]);
};
