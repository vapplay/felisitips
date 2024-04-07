import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { CustomScreen, SwipedImage } from "../components";
import { ThemeType } from "../types/types";
import constants from "expo-constants";

import { useDispatch, useSelector } from "react-redux";
import { BottomIcons } from "./util/BottomIcons";
import { addFavoritePhrase } from "../redux/FavoritePhraseSlice";
import Toast from "react-native-toast-message";

import * as Notifications from "expo-notifications";
import { useRandomPhrase } from "../hook";
import LottieView from "lottie-react-native";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

export const Home = ({ route, navigation }: any) => {
  const {
    changeTheme: { randomPhrase },
  } = useSelector((state: any) => state);
  const { theme, userName }: ThemeType = route?.params;
  const { backgroundImage } = useSelector((state: any) => state.changeTheme);
  const iconColor = theme.colors.btn_icon;

  const disPatcher = useDispatch();
  const buttons = [
    { buttonTitle: "Botón 1", identifier: "#000000", options: {} },
    { buttonTitle: "Botón 2", identifier: "#FFFFFF", options: {} },
  ];

  const captureScreen = () => {
    navigation.navigate("ShareScreen");
  };

  const handleFavorite = () => {
    try {
      disPatcher(addFavoritePhrase(randomPhrase.phrase));
      Toast.show({
        type: "success",
        text2: "Agregado a favoritos",
      });
    } catch (error) {}
  };

  useEffect(() => {
    const sendNotification = async () => {
      const { randomPhrase } = useRandomPhrase();
      await Notifications.setNotificationCategoryAsync("hola", buttons);
      await Notifications.scheduleNotificationAsync({
        content: {
          title: userName + " Recuerda",
          body: randomPhrase?.phrase,
        },
        trigger: {
          seconds: 60,
          repeats: true,
        },
      });
    };

    sendNotification();

    const intervalId = setInterval(() => {
      sendNotification();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []); // Dependencia de useEffect

  const [lottieNumber, setLottieNumber] = useState(0);
  const lottieRandom = [
    <LottieView
      source={require("../animations/LOTIE1V2.json")}
      style={{ width: 64, height: 64 }}
      autoPlay
      loop
    />,
    <LottieView
      source={require("../animations/LOTIE2V2.json")}
      style={{ width: 64, height: 64 }}
      autoPlay
      loop
    />,

    <LottieView
      source={require("../animations/LOTIE3V2.json")}
      style={{ width: 64, height: 64 }}
      autoPlay
      loop
    />,
  ];

  const focus = useIsFocused();

  useEffect(() => {
    console.log(lottieNumber);
    if (!focus) {
      if (lottieNumber === lottieRandom.length) {
        setLottieNumber(0);
      } else {
        setLottieNumber((prev) => prev + 1);
      }
    }
  }, [focus]);

  return (
    <CustomScreen theme={theme}>
      <ImageBackground source={{ uri: backgroundImage }} style={styles.body}>
        <View style={styles.heder}>
          <Text
            style={[
              styles.name,
              {
                backgroundColor: theme.colors.btn,
                color: theme.colors.btn_icon,
              },
            ]}
          >
            {"Hola'   " + userName}
          </Text>
        </View>

        <View>
          <Text
            style={[styles.textPhrase, { fontFamily: theme.defaultFont }]}
          >{`${"hola"} ${userName}, hoy recuerda que... \n`}</Text>
          <Text
            style={[styles.textPhrase, { fontFamily: theme.defaultFont }]}
          >{`${randomPhrase.phrase}`}</Text>
        </View>

        <View>
          <SwipedImage />
        </View>

        <View style={styles.bottom}>
          <View
            style={[
              styles.itemsThemes,
              { justifyContent: "space-around", marginBottom: 90 },
            ]}
          >
            {BottomIcons(
              navigation,
              theme,
              handleFavorite,
              captureScreen
            ).bloque_2.map((item, index) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.bottomIcon,
                    { backgroundColor: theme.colors.btn, padding: 10 },
                  ]}
                  key={index}
                  onPress={item.action}
                >
                  {item.icon}
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={{ alignSelf: "center" }}>
            {lottieRandom[lottieNumber]}
          </View>

          <View style={styles.itemsThemes}>
            {BottomIcons(navigation, theme).bloque_1.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={item.action}
                  key={index}
                  style={[
                    styles.bottomIcon,
                    { backgroundColor: theme.colors.btn },
                  ]}
                >
                  {item?.icon}
                  <Text style={[{ color: iconColor }]}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ImageBackground>
    </CustomScreen>
  );
};

const styles = StyleSheet.create({
  textRemember: { color: "red", fontWeight: "500" },
  body: { height: "100%", width: "100%", justifyContent: "space-between" },
  name: {
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  heder: {
    flexDirection: "row",
    margin: constants.statusBarHeight + 10,
  },
  bottom: {
    width: "100%",
    marginBottom: 30,
    justifyContent: "center",
  },
  bottomIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 6,
    paddingVertical: 9,
    borderRadius: 10,
  },
  itemsThemes: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 26,
    justifyContent: "space-between",
  },
  viewShot: {
    width: "100%",
    height: "100%",
  },

  textPhrase: {
    textAlign: "center",
    color: "rgb(255, 255, 255)",
    fontSize: 20,
  },
});
