import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const LoadComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="rgb(10, 137, 255)" />
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
};

export default LoadComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
