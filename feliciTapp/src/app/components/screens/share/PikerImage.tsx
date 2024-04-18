import React, { useMemo, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

type FunctionType = () => void;

const items = (
  camera: FunctionType,
  files: FunctionType,
  isSharing: boolean,
  openSheet: (even: boolean) => void
) => [
  {
    name: "cámara",
    icon: <FontAwesome name="camera" size={24} color="black" />,
    action: camera,
  },

  isSharing && {
    name: "carrusel",
    icon: <FontAwesome6 name="window-restore" size={24} color="black" />,
    action: openSheet,
  },

  {
    name: "archivos",
    icon: <FontAwesome name="folder" size={24} color="black" />,
    action: files,
  },
];

const PikerImage = ({
  onChange,
  isSharing = false,
  openSheet,
  closeModal,
}: {
  onChange: (e: string) => void;
  isSharing?: boolean;
  openSheet: (even: boolean) => void;
  closeModal: () => void;
}) => {
  const launchFiles = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log(
        "Se necesitan permisos para acceder a la biblioteca de medios."
      );
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (result?.assets) {
      onChange && onChange(result?.assets[0]?.uri ?? "");
    }
  };

  const launchCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      console.log("Se necesitan permisos para acceder a la cámara.");
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (result?.assets) {
      onChange && onChange(result?.assets[0]?.uri ?? "");
    }
  };

  const handleOpenSheet = () => {
    openSheet && openSheet(true);
    closeModal();
  };

  return (
    <View style={{ flexDirection: "row", gap: 50, paddingTop: 20 }}>
      {items(launchCamera, launchFiles, isSharing, handleOpenSheet).map(
        (e, i) => {
          return (
            <TouchableOpacity
              style={{ alignItems: "center", gap: 5 }}
              key={i}
              onPress={e.action}
            >
              {e.icon}
              <Text>{e.name}</Text>
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
};

export { PikerImage };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
