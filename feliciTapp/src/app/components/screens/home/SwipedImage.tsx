import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";
import React, { memo } from "react";

const TAMANO_CUADRADO = 200; // Ajusta el tamaño del cuadrado aquí
const Epacing = {
  spacing: 25,
  gap: 1,
};

export const SwipedImage = memo(() => {
  const scrollX = React.useRef(
    new Animated.Value(TAMANO_CUADRADO - Epacing.spacing)
  ).current;

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
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          const position = Animated.subtract(index * TAMANO_CUADRADO, scrollX);
          const isDisappearing = -TAMANO_CUADRADO;
          const isAppearing = TAMANO_CUADRADO;

          const scaleValue = position.interpolate({
            inputRange: [isDisappearing, 0, isAppearing],
            outputRange: [0.8, 1, 0.8], // Ajusta los valores de escala aquí
            extrapolate: "clamp",
          });

          const opacityValue = position.interpolate({
            inputRange: [isDisappearing, 0, isAppearing],
            outputRange: [0.6, 1, 0.6],
            extrapolate: "clamp",
          });

          return (
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
              <View>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: 17,
                    paddingHorizontal: 10,
                    textAlign: "center",
                  }}
                >
                  Agrega una imagen feliz
                </Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({});
