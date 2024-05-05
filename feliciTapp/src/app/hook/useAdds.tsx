import { useState, useEffect } from "react";
import {
  InterstitialAd,
  AdEventType,
  RewardedInterstitialAd,
  RewardedAdEventType,
} from "react-native-google-mobile-ads";
import { config } from "../config/config";

//// initialize    adds
const interstitial = InterstitialAd.createForAdRequest(
  config.add.INTERSTITIAL_ID,
  {
    requestNonPersonalizedAdsOnly: true,
  }
);

export const useAnuncios = () => {
  const [interstitialLoaded, setInterstitialLoaded] = useState(false);

  const loadInterstitial = () => {
    const unsubscribeLoaded = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setInterstitialLoaded(true);
      }
    );

    const unsubscribeClosed = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        setInterstitialLoaded(false);
        interstitial.load();
      }
    );

    interstitial.load();

    return () => {
      unsubscribeClosed();
      unsubscribeLoaded();
    };
  };

  useEffect(() => {
    const InterstitialAds = loadInterstitial();

    return () => {
      InterstitialAds();
    };
  }, []);

  return {
    interstitial,
    interstitialLoaded,
  };
};
