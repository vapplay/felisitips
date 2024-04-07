import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { themeTypes } from "../../types/types";
import { DowIndicator } from "./DowIndicator";

type Props = {
  children: JSX.Element | JSX.Element[];
  theme: themeTypes;
  modal?: boolean;
  style?: ViewStyle;
  ref?: any;
};

export const CustomScreen = ({
  theme,
  children,
  modal = false,
  style,
  ref,
}: Props) => {
  return (
    <View style={[{ flex: 1, backgroundColor: theme.colors.cream }]} ref={ref}>
      {modal && <DowIndicator />}
      <View style={style}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({});
