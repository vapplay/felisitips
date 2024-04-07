import {
  MaterialIcons,
  Feather,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

// methods


export const BottomIcons = (
  navigation: any,
  theme: any,
  handleFavorite?: any,
  captureScreen?: any
) => {
  const iconColor = theme.colors.btn_icon;
  const bloque_1 = [
    {
      name: "Favoritas",
      icon: <AntDesign name="appstore-o" size={24} color={iconColor} />,
      action: () => {
        navigation.navigate("Favorites");
      },
    },
    {
      name: "Temas",
      icon: <MaterialIcons name="format-paint" size={24} color={iconColor} />,
      action: () => {
        navigation.navigate("Themes");
      },
    },
  ];

  const bloque_2 = [
    {
      name: "love",
      icon: <FontAwesome name="heart-o" size={24} color={iconColor} />,
      action: () => {
        handleFavorite();
      },
    },
    {
      name: "share",
      icon: <Feather name="share" size={24} color={iconColor} />,
      action: () => {
        captureScreen();
      },
    },
  ];

  return {
    bloque_1,
    bloque_2,
  };
};
