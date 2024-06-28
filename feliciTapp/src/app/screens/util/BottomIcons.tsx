import {
  MaterialIcons,
  Feather,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

export const BottomIcons = (
  navigation: any,
  theme: any,
  handleFavorite?: any,
  captureScreen?: any
) => {
  const iconColor = theme.colors.btn_icon;
  const commonStyleBloque1 = { borderWidth: 2, borderColor: '#FFFF00', padding: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center', }; // NUEVA LINEA
  const bloque_1 = [
    {
      name: "Favoritas",
      icon: <AntDesign name="appstore-o" size={24} color={'#FFFF00'} />,
      action: () => {
        navigation.navigate("Favorites");
      },
      style: commonStyleBloque1, // NUEVA LINEA: Aplicando estilo común a bloque_1  


    },
    {
      name: "Temas =)",
      icon: <MaterialIcons name="format-paint" size={24} color={'#FFFF00'} />,
      action: () => {
        navigation.navigate("Themes");
      },
      style: commonStyleBloque1, // NUEVA LINEA: Aplicando estilo común a bloque_1

    },
  ];

  const bloque_2 = [
    {
      name: "love",
      icon: <FontAwesome name="heart-o" size={24} color={'#FFFF00'} />,
      action: () => {
        handleFavorite();
      },
      style: { borderWidth: 2, borderColor: "#FFFF00" },
    },
    {
      name: "share",
      icon: <Feather name="share" size={27} color={"#FFFF00"} />,
      action: () => {
        captureScreen();
      },
      style: { borderWidth: 2, borderColor: "#FFFF00" },
    },
  ];

  return {
    bloque_1,
    bloque_2,
  };
};
