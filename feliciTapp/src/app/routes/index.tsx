import { createStackNavigator } from "@react-navigation/stack";
import { onboardingRouteList, routeList } from "./list";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { ThemeType } from "../types/types";
import Toast from "react-native-toast-message";
import { toastConfig } from "../theme/themeConfig";
import { useRandomPhrase } from "../hook";

const Stack = createStackNavigator();

const OnboardingNavigation = ({ theme }: ThemeType) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
      {onboardingRouteList.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item?.name}
            component={item?.component}
            initialParams={{ theme }}
            options={{ ...item.config }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

const StackNavigation = ({ theme, userName }: ThemeType) => {
  const { randomPhrase } = useRandomPhrase();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
      {routeList.map((item, index) => {
        return (
          <Stack.Screen
            name={item.name}
            component={item.component}
            key={index}
            options={{
              ...item?.config,
            }}
            initialParams={{ theme, userName, randomPhrase }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export const NavigationProvider = () => {
  const {
    onboarding,
    theme: { theme },
    userInfo: { name },
  } = useSelector((state: any) => state);

  return (
    <>
      <NavigationContainer>
        {onboarding.value === 1 ? (
          <StackNavigation {...{ theme, userName: name }} />
        ) : (
          <OnboardingNavigation {...{ theme }} />
        )}
      </NavigationContainer>
      <Toast config={toastConfig} />
    </>
  );
};
