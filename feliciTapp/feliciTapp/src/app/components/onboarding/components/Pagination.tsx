import { StyleSheet, View } from "react-native";
import React from "react";
import { SharedValue } from "react-native-reanimated";
import { OnboardingData } from "../data/data";
import Dot from "./Dot";
import { themeTypes } from "../../../types/types";

type Props = {
  data: OnboardingData[];
  x: SharedValue<number>;
  theme: themeTypes;
};
const Pagination = ({ data, x, theme }: Props) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => {
        return <Dot index={index} x={x} key={index} theme={theme} />;
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
