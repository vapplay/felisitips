import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { themeTypes } from "../../types/types";

type Props = {
  title: String;
  theme: themeTypes;
};

export const CustomHeader = ({ title = "Title", theme }: Props) => {
  return (
    <View>
      <Text style={[styles.Text, { color: theme.colors.title }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontWeight: "600",
    fontSize: 25,
    textAlign: "center",
  },
});
