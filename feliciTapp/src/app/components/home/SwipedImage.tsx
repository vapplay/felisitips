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
import { addImage, deleteSwipedImage } from "../../redux/useImageStorage";
import { AntDesign } from "@expo/vector-icons";

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

  const stateImage = useSelector((state: any) => state.swiper?.images);

  const imgArray = stateImage?.slice(0, 7) ?? [];

  const [modalPiker, setModalPiker] = useState(false);
  const [image, setImage] = useState("");

  const deleteImage = (item: string) => {
    dispatcher(deleteSwipedImage(item));
    return null;
  };

  useEffect(() => {
    if (image !== "") {
      dispatcher(addImage(image));
      setModalPiker(false);
    }
  }, [image]);

  return (
    <View style={{ marginVertical: 13 }}>
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
        data={imgArray}
        keyExtractor={(item, index) => index?.toString()}
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
                  backgroundColor: "rgba(252, 232, 16, 0.83)",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: opacityValue,
                  transform: [{ scale: scaleValue }],
                }}
              >
                {item !== 1 && (
                  <TouchableOpacity
                    onPress={() => deleteImage(item)}
                    style={{
                      position: "absolute",
                      zIndex: 2,
                      left: 0,
                      top: 0,
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  >
                    <AntDesign name="closecircle" size={24} color="white" />
                  </TouchableOpacity>
                )}
                {item === 1 ? (
                  <Text
                    style={{
                      color: "black",
                      fontSize: 19,
                      paddingHorizontal: 10,
                      textAlign: "center",
                      fontWeight: "bold",
                      shadowColor: "black",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
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
        <PikerImage
          onChange={(file: string) => setImage(String(file)) as any}
          openSheet={function (even: boolean): void {
            throw new Error("Function not implemented.");
          }}
          closeModal={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </CustomModal>
    </View>
  );
});

const styles = StyleSheet.create({});
