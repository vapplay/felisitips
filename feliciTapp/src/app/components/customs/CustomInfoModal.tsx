import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import React from "react";
import { Entypo, Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const stylesIcons = {
  size: 24,
  color: "#009FE3",
};
const items = [
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
    name: "Contactanos",
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

const CustomInfoModal = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={{ backgroundColor: "white", borderRadius: 10, padding: 5 }}>
      <FlatList
        data={items}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 14 }}
            onPress={() =>
              item.name === "Contactanos"
                ? Linking.openURL(item.link)
                : navigation.navigate("web", { uri: item.link })
            }
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
