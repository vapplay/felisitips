import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Share,
} from "react-native";
import React from "react";
import { Entypo, Fontisto, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const stylesIcons = {
  size: 24,
  color: "#009FE3",
};
const items = [
  {
    name: "Compartir",
    icons: (
      <Ionicons
        name="share-outline"
        size={stylesIcons.size}
        color={stylesIcons.color}
      />
    ),
    link: null,
  },

  {
    name: "Visitanos",
    icons: (
      <Fontisto
        name="world-o"
        size={stylesIcons.size}
        color={stylesIcons.color}
      />
    ),
    link: "https://felicitips.com/",
  },
  {
    name: "Contáctenos",
    icons: (
      <Entypo name="email" size={stylesIcons.size} color={stylesIcons.color} />
    ),
    link: "mailto:contacto@felicitips.com",
  },
  {
    name: "Novedades",
    icons: (
      <Entypo name="news" size={stylesIcons.size} color={stylesIcons.color} />
    ),
    link: "https://felicitips.com/novedades/",
  },
];
//
const CustomInfoModal = ({ state }: any) => {
  const navigation = useNavigation<any>();

  const onShare = async () => {
    // this is a faction for sharing this app
    try {
      await Share.share({
        message: `“¡Hola! Te invito a ser feliz descargando nuestra app de mensajes y frases positivas y tips de felicidad. ¡Descárgala Ya!” 😊 => https://play.google.com/store/apps/details?id=com.vapplay.felicitips`,
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text2: "error al compartir",
      });
    }
  };

  return (
    <View style={{ backgroundColor: "white", borderRadius: 10, padding: 5 }}>
      <FlatList
        data={items}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 14 }}
            onPress={() => {
              item.link === null
                ? onShare()
                : item.name === "Contactanos"
                ? Linking.openURL(item.link)
                : navigation.navigate("web", { uri: item.link });
              state(false);
            }}
          >
            {item.icons}
            <Text>{item?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export { CustomInfoModal };

const styles = StyleSheet.create({});
