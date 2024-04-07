import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { themeTypes } from "../../types/types";
type Props = {
  theme: themeTypes;
  action: () => void;
  text: String;
};

export const CustomNexBtn = ({ theme, action, text = "btn" }: Props) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={[styles.btn, { backgroundColor: theme.colors.btn }]}
    >
      <Text style={[styles.btn_text, { color: theme.colors.btn_icon }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "92%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 9,
  },

  btn_text: {
    fontSize: 27,
    textTransform: "capitalize",
  },
});
