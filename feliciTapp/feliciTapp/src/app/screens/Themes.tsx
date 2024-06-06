import { StyleSheet, View } from "react-native";
import React from "react";
import { CustomHeader, CustomScreen, ThemesGrid } from "../components";
import { ThemeType } from "../types/types";

export function Themes({ route, navigation }: any) {
  const { theme, userName }: ThemeType = route?.params;
  return (
    <CustomScreen theme={theme} modal>
      <CustomHeader title={"Temas"} theme={theme} />
      <View style={styles.container}>
        <ThemesGrid navigation={navigation} />
      </View>
    </CustomScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 5,
    borderRadius: 8,
  },
});
