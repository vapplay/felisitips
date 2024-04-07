import { AnimationObject } from "lottie-react-native";
import { themeConfig } from "../../../theme/themeConfig";

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [...themeConfig.onboarding.elements.screens];

export default data;
