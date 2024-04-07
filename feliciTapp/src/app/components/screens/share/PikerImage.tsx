import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

type FunctionType = () => void;

const items = (camera: FunctionType, files: FunctionType) => [
  {
    name: "cámara",
    icon: <FontAwesome name="camera" size={24} color="black" />,
    action: camera,
  },
  {
    name: "archivos",
    icon: <FontAwesome name="folder" size={24} color="black" />,
    action: files,
  },
];

const PikerImage = ({ onChange }: { onChange: (e: string) => void }) => {
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

  return (
    <View style={{ flexDirection: "row", gap: 50, paddingTop: 20 }}>
      {items(launchCamera, launchFiles).map((e, i) => {
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
      })}
    </View>
  );
};

export { PikerImage };

const styles = StyleSheet.create({});
