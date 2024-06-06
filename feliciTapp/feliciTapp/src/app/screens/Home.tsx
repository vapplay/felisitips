import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  CustomAnimateLottieIcon,
  CustomInfoModal,
  CustomScreen,
  SwipedImage,
} from "../components";
import { ThemeType } from "../types/types";
import constants from "expo-constants";

import { useDispatch, useSelector } from "react-redux";
import { BottomIcons } from "./util/BottomIcons";
import { addFavoritePhrase } from "../redux/FavoritePhraseSlice";
import Toast from "react-native-toast-message";

//  icons
import { Feather } from "@expo/vector-icons";
import { useDailyNotifications } from "../hook/useLocalNotifications";
import { BannerAds } from "../hook";

export const Home = ({ route, navigation }: any) => {
  const {
    changeTheme: { randomPhrase },
  } = useSelector((state: any) => state);
  const { favorite } = useSelector((state: any) => state.changeFavorite);
  const { theme, userName }: ThemeType = route?.params;
  const { backgroundImage } = useSelector((state: any) => state.changeTheme);
  const iconColor = theme.colors.btn_icon;

  const [opeTopMenu, setOpeTopMenu] = useState(false);

  const { lasPhrase } = useDailyNotifications(userName as any);
  const phrase = lasPhrase ? lasPhrase : randomPhrase;
  const currenPhrase = favorite ? favorite : phrase;
  const disPatcher = useDispatch();

  const captureScreen = () => {
    navigation.navigate("ShareScreen", { randomPhrase: currenPhrase });
  };

  const handleFavorite = () => {
    try {
      disPatcher(addFavoritePhrase(currenPhrase));
      Toast.show({
        type: "success",
        text2: "Agregado a favoritos",
      });
    } catch (error) {}
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      {opeTopMenu && (
        <TouchableOpacity
          onPress={() => {
            setOpeTopMenu(false);
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 2,
          }}
        />
      )}

      {opeTopMenu && (
        <View
          style={{
            position: "absolute",
            marginTop: 90,
            zIndex: 100,
            marginLeft: 45,
          }}
        >
          <CustomInfoModal state={setOpeTopMenu} />
        </View>
      )}

      <CustomScreen theme={theme}>
        <ImageBackground source={{ uri: backgroundImage }} style={styles.body}>
          <View style={styles.heder}>
            <TouchableOpacity
              onPress={() => setOpeTopMenu((prev) => !prev)}
              style={[
                {
                  backgroundColor: theme.colors.btn,
                  padding: 5,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: "#FFFF00",
                  margin: -3,
                },
              ]}
            >
              <Feather name="user" size={21} color={"#FFFF00"} />
            </TouchableOpacity>

            <Text
              style={[
                styles.name,
                {
                  backgroundColor: theme.colors.btn,
                  color: theme.colors.btn_icon,
                },
              ]}
            >
              {"Hola " + userName + " !"}
            </Text>
          </View>

          <View style={styles.phraseContainer}>
            <Text
              style={[
                styles.textPhrase,
                { fontFamily: theme.defaultFont, paddingHorizontal: 3 },
              ]}
            >{`${"hola"} ${userName}, hoy recuerda que... \n`}</Text>
            <Text
              style={[styles.textPhrase, { fontFamily: theme.defaultFont }]}
            >{`${currenPhrase?.phrase}`}</Text>

            <Text
              style={[
                styles.textPhrase,
                { fontFamily: theme.defaultFont, marginTop: 10 },
              ]}
            >{`- ${currenPhrase?.by} -`}</Text>
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
                      item?.style,
                    ]}
                    key={index}
                    onPress={item.action}
                  >
                    {item.icon}
                  </TouchableOpacity>
                );
              })}
            </View>

            <CustomAnimateLottieIcon />
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
          <BannerAds />
        </ImageBackground>
      </CustomScreen>
    </ScrollView>
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
    gap: 17,
  },
  bottom: {
    width: "100%",
    marginBottom: 30,
    justifyContent: "center",
    marginTop: 10,
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

  phraseContainer: {
    backgroundColor: "rgba(10, 10, 10, 0.33)",
    width: "97%",
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 4,
  },
});
