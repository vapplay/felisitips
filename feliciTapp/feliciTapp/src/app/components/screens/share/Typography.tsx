import React, { memo, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Fonts_list } from "../../../theme/fonts";
import { FlatList } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("screen");

const Typography = memo(({ onChange }: { onChange: (e: string) => void }) => {
  const [loadedFonts, setLoadedFonts] = useState(20); // Inicialmente cargamos 20 fuentes
  const [showLoadMore, setShowLoadMore] = useState(true); // Mostrar botón "Cargar más" cuando hay más fuentes por cargar

  const loadMoreFonts = () => {
    const nextFontsToLoad = loadedFonts + 20;
    if (nextFontsToLoad >= Fonts_list.length) {
      // Si hemos cargado todas las fuentes
      setShowLoadMore(false);
    }
    setLoadedFonts(nextFontsToLoad);
  };

  const handleEndReached = () => {
    if (showLoadMore) {
      loadMoreFonts();
    }
  };

  const onSelect = (item: string) => {
    onChange && onChange(item);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{ width: "100%" }}
        data={Fonts_list.slice(0, loadedFonts)} // Mostrar solo las fuentes cargadas
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.textContainer}
              onPress={() => onSelect(item)}
            >
              <Text style={[styles.text, { fontFamily: item }]}>{item}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.7}
        onEndReached={handleEndReached}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  textContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width,
  },
  loadMoreButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export { Typography };
