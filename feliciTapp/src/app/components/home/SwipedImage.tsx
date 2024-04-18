import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { memo, useEffect, useState } from "react";
import { PikerImage } from "../screens";
import { CustomModal } from "../customs";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../../redux/useImageStorage";

const TAMANO_CUADRADO = 200; // Ajusta el tamaño del cuadrado aquí
const Epacing = {
  spacing: 25,
  gap: 1,
};

export const SwipedImage = memo(() => {
  const scrollX = React.useRef(
    new Animated.Value(TAMANO_CUADRADO - Epacing.spacing)
  ).current;

  const dispatcher = useDispatch();

  const imgArray = useSelector((state: any) => state.swiperSlice.images);

  const [modalPiker, setModalPiker] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (image !== "") {
      dispatcher(addImage(image));
      setModalPiker(false);
    }
  }, [image]);

  return (
    <View>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        snapToAlignment="start"
        contentContainerStyle={{
          marginTop: 10,
          marginLeft: 30,
          gap: Epacing.gap,
          paddingRight: 100,
        }}
        snapToInterval={TAMANO_CUADRADO}
        decelerationRate={0}
        scrollEventThrottle={16}
        data={imgArray?.slice(0, 7) ?? []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          const position = Animated.subtract(index * TAMANO_CUADRADO, scrollX);
          const isDisappearing = -TAMANO_CUADRADO;
          const isAppearing = TAMANO_CUADRADO;

          const scaleValue = position.interpolate({
            inputRange: [isDisappearing, 0, isAppearing],
            outputRange: [0.8, 1, 0.8],
            extrapolate: "clamp",
          });

          const opacityValue = position.interpolate({
            inputRange: [isDisappearing, 0, isAppearing],
            outputRange: [0.6, 1, 0.6],
            extrapolate: "clamp",
          });

          return (
            <TouchableOpacity onPress={() => setModalPiker(true)}>
              <Animated.View
                style={{
                  width: TAMANO_CUADRADO,
                  height: TAMANO_CUADRADO,
                  borderRadius: 10,
                  backgroundColor: "rgba(252, 232, 16, 0.51)",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: opacityValue,
                  transform: [{ scale: scaleValue }],
                }}
              >
                {item === 1 ? (
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: 17,
                      paddingHorizontal: 10,
                      textAlign: "center",
                    }}
                  >
                    Agrega una foto de un momento feliz
                  </Text>
                ) : (
                  item && (
                    <Image
                      source={{ uri: item }}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 10,
                      }}
                    />
                  )
                )}
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      />

      <CustomModal isOpen={modalPiker} onClose={() => setModalPiker(false)}>
        <PikerImage onChange={(file: string) => setImage(String(file))} />
      </CustomModal>
    </View>
  );
});

const styles = StyleSheet.create({});
