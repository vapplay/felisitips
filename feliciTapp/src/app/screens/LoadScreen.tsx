import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const LoadScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={50}
        color={"#007AFF"}
        style={{ alignSelf: "center" }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#007AFF",
          textAlign: "center",
        }}
      >
        Loading...
      </Text>
    </View>
  );
};

export default LoadScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
