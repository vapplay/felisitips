import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { themeConfig } from "../../../theme/themeConfig";
import { useDispatch } from "react-redux";
import { changeThemeBackgroundImage } from "../../../redux/changeThemeSlice";

export const ThemesGrid = ({ navigation }: any) => {
  const { data } = themeConfig?.themes;

  const dispatch = useDispatch();

  const action = (url: string) => {
    dispatch(changeThemeBackgroundImage(url));
    navigation.goBack();
  };

  return (
    <View>
      <FlatList
        numColumns={3}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: 10,
        }}
        columnWrapperStyle={{
          gap: 10,
        }}
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => action(item.url)}>
              <View style={styles.img}>
                <Image
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%", borderRadius: 10 }}
                  source={{ uri: item.url }}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 200,
  },
});
