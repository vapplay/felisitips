import { TestIds } from "react-native-google-mobile-ads";

export const config = {
  add: {
    INTERSTITIAL_ID: __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-7428378349248082/4948533095",
    BANNER_ID: __DEV__ ? TestIds.BANNER : "ca-app-pub-7428378349248082/8867596807",
  },
};
