import { View, StyleSheet } from "react-native";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";
import { config } from "../config/config";

// create a component
export const BannerAds = () => {
  return (
    <View style={styles.banner}>
      <BannerAd
        unitId={config.add.BANNER_ID}
        size={"400x67"}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  banner: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});
