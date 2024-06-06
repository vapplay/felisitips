import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DowIndicator } from "../components/customs/DowIndicator";
import { WebView as Web } from "react-native-webview";

const WebView = ({ route, theme }: any) => {
  const { uri } = route?.params ?? {};
  return (
    <View>
      <DowIndicator />
      <View style={{ width: "100%", height: "100%" }}>
        <Web style={styles.container} source={{ uri }} />
      </View>
    </View>
  );
};

export { WebView };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
