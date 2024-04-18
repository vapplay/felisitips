import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from "@react-navigation/stack";
import {
  Favorites,
  GetUserName,
  Home,
  Onboarding,
  Themes,
  ShareScreen,
  DedIcateScreen,
  WebView,
} from "../screens";


const modalScreeConfig: StackNavigationOptions = {
  gestureDirection: "vertical",
  cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
};

const modalHorizontalScreeConfig: StackNavigationOptions = {
  gestureDirection: "horizontal",
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const onboardingRouteList = [
  {
    name: "Onboarding",
    component: Onboarding,
    config: {},
  },
  {
    name: "GetUserName",
    component: GetUserName,
    config: { ...modalScreeConfig },
  },
];

const routeList = [
  {
    name: "Home",
    component: Home,
    config: {},
  },

  {
    name: "Themes",
    component: Themes,
    config: { ...modalScreeConfig },
  },

  {
    name: "Favorites",
    component: Favorites,
    config: { ...modalScreeConfig },
  },
  {
    name: "ShareScreen",

    component: ShareScreen,
    config: { ...modalScreeConfig },
  },

  {
    name: "Dedicate",
    component: DedIcateScreen,
    config: { ...modalScreeConfig },
  },
  {
    name: "web",
    component: WebView,
    config: { ...modalScreeConfig },
  },
];

export { routeList, onboardingRouteList };
