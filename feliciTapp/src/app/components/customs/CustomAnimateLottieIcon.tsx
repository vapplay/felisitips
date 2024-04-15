import React, { useEffect, useState } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { useIsFocused } from "@react-navigation/native";

const CustomAnimateLottieIcon = () => {
  // Verifica si el componente está enfocado
  const isFocused = useIsFocused();

  // Define las animaciones y sus rutas
  const animations = [
    require("../../animations/LOTIE1V2.json"),
    require("../../animations/LOTIE2V2.json"),
    require("../../animations/LOTIE3V2.json"),
  ];

  // Estado para guardar el índice de la animación actual
  const [animationIndex, setAnimationIndex] = useState(0);

  // Función para cambiar la animación
  const changeAnimation = () => {
    setAnimationIndex((prevIndex) => {
      // Si llegamos al final del arreglo, volvemos al inicio
      if (prevIndex === animations.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  // Efecto para cambiar la animación cuando el componente pierde el foco
  useEffect(() => {
    if (!isFocused) {
      changeAnimation(); 
    }
  }, [isFocused]);

  return (
    <View style={{ alignSelf: "center" }}>
      {animations.length > 0 && (
        <LottieView
          source={animations[animationIndex]}
          style={{ width: 64, height: 64 }}
          autoPlay
          loop
        />
      )}
    </View>
  );
};

export { CustomAnimateLottieIcon };
