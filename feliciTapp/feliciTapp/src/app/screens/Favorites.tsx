import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  CustomAnimateLottieIcon,
  CustomHeader,
  CustomScreen,
  ThemesLove,
} from "../components";
import { ThemeType } from "../types/types";

export const Favorites = ({ route, navigation }: any) => {
  const { theme, userName }: ThemeType = route?.params;
  return (
    <CustomScreen theme={theme} modal>
      <View style={{ gap: 10 }}>
        <CustomHeader title={"Frases favoritas"} theme={theme} />
        <CustomAnimateLottieIcon />
      </View>

      <View style={styles.container}>
        <ThemesLove navigation={navigation} theme={theme} />
      </View>
    </CustomScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 5,
    borderRadius: 8,
    textShadowColor: "rgb(0, 0, 0)",
    textShadowRadius: 10,
  },
});
