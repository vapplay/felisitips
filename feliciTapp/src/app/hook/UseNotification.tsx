import { useEffect } from "react";
import messaging from "@react-native-firebase/messaging";

export const useNotification = () => {
  async function requestPermission() {
    try {
      const authStatus = await messaging().requestPermission();
      const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED;
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        console.log("Authorization status:", authStatus);
        const token = await messaging().getToken();
        console.log("Token:", token);
      } else {
        console.log("Failed to request permission");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    requestPermission();
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED;
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log("Authorization status:", authStatus);
        messaging()
          .getToken()
          .then((token) => console.log(token));
      } else {
        console.log("Failed to request permission");
      }
    }

    requestUserPermission();

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
        }
      });

    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );
    });

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log("Received foreground message:", remoteMessage);
    });

    return unsubscribe;
  }, []);
};
