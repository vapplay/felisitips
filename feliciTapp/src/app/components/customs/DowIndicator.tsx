import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const DowIndicator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dow} />
    </View>
  );
};

const styles = StyleSheet.create({
  dow: {
    alignSelf: "center",
    width: 100,
    height: 7,
    backgroundColor: "grey",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  container: {
    marginBottom: 20,
  },
});
