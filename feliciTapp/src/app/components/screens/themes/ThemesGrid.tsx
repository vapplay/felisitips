import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { useDispatch } from "react-redux";
import { changeThemeBackgroundImage } from "../../../redux/changeThemeSlice";
import { getData } from "../../../fixures/getData";
import { useQuery } from "@tanstack/react-query";
import LoadScreen from "../../../screens/LoadScreen";

export const ThemesGrid = ({ navigation }: any) => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["get-theme"],
    queryFn: async () => await getData("get-theme"),
  });
  /// todo =====  real data time
  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 10000);

    return () => clearInterval(interval);
  }, [refetch]);

  /// todo =====  real data time

  const dispatch = useDispatch();

  const action = (url: string) => {
    dispatch(changeThemeBackgroundImage(url));
    navigation.goBack();
  };

  if (isLoading) {
    return <LoadScreen />;
  }

  return (
    <View>
      <FlatList
        numColumns={3}
        showsVerticalScrollIndicator={true}
        indicatorStyle="black"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: 15,
          paddingBottom: 220,
        }}
        columnWrapperStyle={{
          gap: 10,
          justifyContent: "space-between",
          paddingHorizontal: 10,

        }}
        data={data?.reverse()}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => action(item.url)}
              //style={{ gap: 5 }}
              style={{ marginBottom: 15 }}
            >
              <View style={styles.img}>
                <Image
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%", borderRadius: 10 }}
                  source={{ uri: item.url }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Text>
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
