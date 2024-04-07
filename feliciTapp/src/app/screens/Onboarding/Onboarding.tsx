import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OnboardingScreen from "../../components/onboarding/OnboardingScreen";

export const Onboarding = ({ route }: any) => {
  const { theme } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <OnboardingScreen {...{ theme }} />
    </View>
  );
};
