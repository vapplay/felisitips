import React, { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  ColoPiker,
  CustomModal,
  CustomModalBottom,
  CustomNexBtn,
  CustomScreen,
  FontStyles,
  PikerImage,
  Typography,
} from "../components";
import { DowIndicator } from "../components/customs/DowIndicator";
import { useDispatch, useSelector } from "react-redux";

// icons

import {
  Entypo,
  FontAwesome,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

import { ThemeType } from "../types/types";
import ViewShot from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import { dedicateAdd } from "../redux/DedicateSlice";

type actionsType = (type?: number) => void;

const items_options = (
  openModal: actionsType,
  handleOpenModal2: actionsType
) => [
  {
    name: "Colores",
    icon: {
      component: Entypo,
      name: "colours",
    },
    action: () => {
      openModal(1);
    },
  },
  {
    name: "Tipografía",
    icon: {
      component: FontAwesome,
      name: "font",
    },
    action: () => {
      openModal(2);
    },
  },
  {
    name: "Foto",
    icon: {
      component: MaterialIcons,
      name: "add-a-photo",
    },
    action: () => {
      openModal(3);
    },
  },
  {
    name: null,
    icon: {
      component: Feather,
      name: "more-horizontal",
    },
    action: () => {
      handleOpenModal2();
    },
  },
];

const ShareScreen = ({ route, navigation }: any) => {
  const { theme, userName }: ThemeType = route?.params;
  const {
    changeTheme: { randomPhrase },
    Dedicate: { name },
  } = useSelector((state: any) => state);

  const { backgroundImage } = useSelector((state: any) => state.changeTheme);
  const ref = useRef<any>();

  const Share = () => {
    ref.current.capture().then((uri: any) => {
      Sharing.shareAsync(uri);
    });
  };

  const [modalType, setModalType] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [onChangeImage, setOnChangeImage] = useState<string | null>(null);
  const [dedicate, setDedicate] = useState(null);
  const [selectColor, setSelectColor] = useState(null);
  const [fontSize, setFontSize] = useState(20);
  const [fontSizeWeight, setFontSizeWeight] = useState("100");
  const [SelectFont, setOnSelectFont] = useState(theme.defaultFont);

  const onSelectColor = ({ hex }: any) => {
    setSelectColor(hex);
  };
  const onSelectFont = (hex: any) => {
    setOnSelectFont(hex);
    handleCloseModal();
  };

  const handleOpenModal = (type?: number) => {
    setModalType(type ?? 1);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal2 = () => {
    setOpenModal2(true);
  };
  const handleCloseModal2 = () => {
    setOpenModal2(false);
  };

  const handleDedicate = () => {
    navigation.navigate("Dedicate");
    handleCloseModal2();
  };

  const dispatcher = useDispatch();

  // animation
  const scaleValue = useRef(new Animated.Value(2)).current;
  const startAnimation = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      friction: 9,
      tension: 4,

      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startAnimation();

    return () => {
      dispatcher(dedicateAdd(""));
    };
  }, []);

  return (
    <CustomScreen theme={theme}>
      <DowIndicator />

      <View
        style={{
          height: "100%",
          flexGrow: 1,
          justifyContent: "space-between",
          paddingBottom: 55,
          gap: 20,
        }}
      >
        <Animated.View
          style={[
            styles.containerShare,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          <ViewShot
            style={[styles.shareImageContainer]}
            ref={ref}
            options={{
              fileName: "Your-File-Name",
              format: "jpg",
              quality: 0.9,
            }}
          >
            <ImageBackground
              style={{ width: "100%", height: "100%", position: "relative" }}
              source={{ uri: backgroundImage }}
            >
              <View>
                <View style={{ marginTop: 50 }}>
                  <Text
                    style={[
                      styles.textPhrase,
                      { fontFamily: theme.defaultFont },
                    ]}
                  >{`${"hola"} ${
                    name !== "" ? name : userName
                  }, hoy recuerda que... \n`}</Text>
                  <Text
                    style={[
                      styles.textPhrase,
                      { fontFamily: theme.defaultFont },
                    ]}
                  >{`${randomPhrase.phrase}`}</Text>
                </View>

                <View style={{ alignSelf: "center" }}>
                  {onChangeImage && (
                    <View style={{ width: 320, height: 250, marginTop: 60 }}>
                      <Image
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 20,
                        }}
                        source={{ uri: onChangeImage }}
                      />
                    </View>
                  )}
                </View>
              </View>

              <View style={styles.logo}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={require("../assets/image/Logo-Icono_felicitips-500x500.png")}
                />
              </View>
            </ImageBackground>
          </ViewShot>
        </Animated.View>

        <View style={styles.bottomSeth}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              gap: 50,
            }}
          >
            {items_options(handleOpenModal, handleOpenModal2).map(
              (Item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => Item.action()}
                    style={{ alignItems: "center" }}
                  >
                    <Item.icon.component
                      name={Item.icon?.name as any}
                      size={24}
                    />
                    {Item.name && <Text>{Item.name}</Text>}
                  </TouchableOpacity>
                );
              }
            )}
          </View>
          <CustomNexBtn action={Share} text="compartir" theme={theme} />
        </View>
      </View>

      <CustomModal
        isOpen={openModal}
        onClose={handleCloseModal}
        onOpen={handleOpenModal as any}
      >
        {modalType === 1 ? (
          <ColoPiker {...{ onSelectColor }} />
        ) : modalType === 2 ? (
          <Typography onChange={(e) => onSelectFont(e)} />
        ) : (
          <PikerImage
            onChange={(e) => {
              setOnChangeImage(e);
              handleCloseModal();
              return;
            }}
          />
        )}
      </CustomModal>

      <CustomModalBottom isOpen={openModal2} onClose={handleCloseModal2}>
        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 50 }}
        >
          <TouchableOpacity style={styles.moreItems} onPress={handleDedicate}>
            <Feather name="user-plus" size={24} color="black" />
            <Text>Dedicar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.moreItems}>
            <FontAwesome name="font" size={24} color="black" />
            <Text>texto</Text>
          </TouchableOpacity>
        </View>
      </CustomModalBottom>
    </CustomScreen>
  );
};

export { ShareScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    marginBottom: 40,
    width: 70,
    height: 70,
  },
  shareImageContainer: {
    height: "100%",
  },

  containerShare: {
    alignSelf: "center",
    width: "100%",
    height: "80%",
    borderRadius: 15,
    overflow: "hidden",
  },

  bottomSeth: {
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: "black",
    elevation: 9,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
    paddingVertical: 10,
  },
  textRemember: { fontWeight: "500" },
  textPhrase: {
    textAlign: "center",
    color: "rgb(255, 255, 255)",
    fontSize: 20,
    textShadowColor: "rgb(0, 0, 0)",
    elevation: 6,
  },

  moreItems: {
    alignItems: "center",
    gap: 5,
    borderRadius: 10,
    borderWidth: 0.5,
    width: 80,
    padding: 14,
    backgroundColor: "rgba(169, 169, 169, 0.05)",
  },
});

{
  /*       <FontStyles
          theme={theme}
          onChange={(e) => setFontSize(e)}
          onChangeWeight={(e) => setFontSizeWeight(e)}
        /> */
}
