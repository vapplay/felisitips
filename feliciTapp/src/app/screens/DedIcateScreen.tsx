import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CustomInput, CustomNexBtn, CustomScreen } from "../components";
import { ThemeType } from "../types/types";
import { DowIndicator } from "../components/customs/DowIndicator";
import { dedicateAdd } from "../redux/DedicateSlice";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";

const DedIcateScreen = ({ route, navigation }: any) => {
  const { theme }: ThemeType = route?.params;

  const [userName, setUserName] = useState<string>("");

  const validateName =
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(?:\s+[a-zA-ZÀ-ÿ\u00f1\u00d1]+)*$/.test(
      userName.trim()
    );

  const dispatcher = useDispatch()


  const onChangeData = (text: string) => {
    setUserName(text);
  };

  const next = () => {
    if (validateName) {
      dispatcher(dedicateAdd(userName.trim()))
      navigation.goBack()
    } else {
      Toast.show({
        type: "error",
        text2: " Escribe su nombre  :) 👋",
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
              { fontFamily: theme.defaultFont },
            ]}
          >
            {theme.dedicate.title}
          </Text>
          <CustomInput
            containerStyle={styles.input}
            placeholder={"Su nombre"}
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

export { DedIcateScreen };
const styles = StyleSheet.create({
  Screen: {},
  input: {
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 1.6,
    borderRadius: 7,
  },
});
