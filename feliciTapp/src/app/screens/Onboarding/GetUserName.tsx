import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CustomInput, CustomNexBtn, CustomScreen } from "../../components";
import { ThemeType } from "../../types/types";
import { useDispatch } from "react-redux";
import { changeValue } from "../../redux/OnboardingSlice";
import { addName } from "../../redux/UserInfoSlice";
import Toast from "react-native-toast-message";

export const GetUserName = ({ route }: any) => {
  const { theme }: ThemeType = route?.params;
  const disPatcher = useDispatch();
  const [userName, setUserName] = useState<string>("");

  const validateName = true;
  const onChangeData = (text: string) => {
    setUserName(text);
  };
  const next = () => {
    if (validateName) {
      disPatcher(addName(userName.trim()));
      disPatcher(changeValue());
    } else {
      Toast.show({
        type: "error",
        text2: "Escribe tu nombre 👋",
      });
    }
  };

  return (
    <CustomScreen theme={theme} modal style={styles.Screen}>
      <ScrollView style={{ height: "100%", width: "100%" }}>
        <View style={{ marginTop: "30%", gap: 100 }}>
          <Text
            style={[
              theme.Onboarding.GetUserNameScreen.title.Styles,
              { fontFamily: theme.defaultFont, paddingHorizontal: 10 },
            ]}
          >
            {theme.Onboarding.GetUserNameScreen.title.text}
          </Text>
          <CustomInput
            containerStyle={styles.input}
            placeholder={"Tu nombre"}
            onChangeText={onChangeData}
            error={false}
            secureTextEntry={false}
          />
          <CustomNexBtn theme={theme} text={"Continuar"} action={next} />
        </View>
      </ScrollView>
    </CustomScreen>
  );
};

const styles = StyleSheet.create({
  Screen: {},
  input: {
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 1.6,
    borderRadius: 7,
  },
});
