import { StyleSheet, Text, View } from "react-native";
import { theme } from "./theme";
import Toast, { BaseToast, BaseToastProps, ErrorToast, ToastConfig } from "react-native-toast-message";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export const themeConfig = {
  onboarding: {
    elements: {
      screens: [
        {
          id: 1,
          animation: require("../animations/LOTIE1V2.json"),
          text: "¡Hola! bienvenid@ a Felicitips. Aquí encontrarás frases inspiradoras, consejos prácticos y citas de autores famosos para ayudarte a alcanzar la felicidad cada día.",
          textColor: "#005b4f",
          backgroundColor: theme.colors.cream,
        },
        {
          id: 2,
          animation: require("../animations/LOTIE2V2.json"),
          text: "Porque ser feliz es una elección. ¡Felicitaciones por elegir iniciar tu viaje hacia la felicidad hoy mismo!",
          textColor: "#1e2169",
          backgroundColor: theme.colors.cream,
        },
        {
          id: 3,
          animation: require("../animations/LOTIE3V2.json"),
          text: "Y gracias por permitirnos recordarte que el propósito de estar en este mundo es “Porque vinimos a ser felices”.\n\n“RECUERDA ACTIVAR LAS NOTIFICACIONES AHORA Y NO TE PIERDAS TU FRASE DIARIA. ¡”",
          textColor: "#F15937",
          backgroundColor: theme.colors.cream,
        },
      ],
    },
  },

  themes: {
    data: [
      {
        id: 1,
        name: "plants",
        url: "https://img.freepik.com/foto-gratis/temporada-otono-hojas-planta-escena-generativa-ai_188544-7971.jpg?w=996&t=st=1711061616~exp=1711062216~hmac=66da636e4e9fa75600c130291a9043e9367fed598a12aa5e7d0379425eea599d",
      },

      {
        id: 2,
        name: "plants",
        url: "https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg?w=1060&t=st=1711064719~exp=1711065319~hmac=a73b63b4ea1545dcfa98842069d8b83337bae6402e8122a3203e56c855d6c72b",
      },

      {
        id: 3,
        name: "plants",
        url: "https://img.freepik.com/foto-gratis/majestuoso-pico-montana-tranquilo-paisaje-invernal-generado-ia_188544-15662.jpg?w=1060&t=st=1711065322~exp=1711065922~hmac=60fcd0f18d464681601e6d71e7504288101c7d3ad1c09a19753e10826ef1d056",
      },

      {
        id: 4,
        name: "plants",
        url: "https://img.freepik.com/foto-gratis/hojas-frescas-otono-revelan-vibrante-patron-organico-generado-ia_188544-15037.jpg?w=1060&t=st=1711065473~exp=1711066073~hmac=b4ddcef44371f4541cba3b4199e4635d0c43618114c5d8ab8935515a9b485ae4",
      },
    ],
  },
};

const errorReplacePatterns = [
  "HTTP error! Status: 404, Message:",
  "HTTP error! Status: 400, Message:",
];

const error_border = "rgb(255, 35, 64)";
const success_border = "rgb(4, 161, 75)";
const iconSiZe = 30;

export const toastConfig: ToastConfig = {
  error: ({ text1, text2 }: BaseToastProps) => {
    const modifiedText = text2
      ? errorReplacePatterns.reduce(
        (modified, pattern) => modified.replace(pattern, ""),
        text2
      )
      : "";

    return (
      <View style={[style.body, style.error]}>
        <MaterialIcons name="error" size={iconSiZe} color={error_border} />
        <View style={style.textContainer}>
          <Text style={style.title}>{text1 ?? "Error"}</Text>
          <Text style={style.text}>{modifiedText}</Text>
        </View>
      </View>
    );
  },

  success: ({ text1, text2 }: BaseToastProps) => {
    const modifiedText = text2
      ? errorReplacePatterns.reduce(
        (modified, pattern) => modified.replace(pattern, ""),
        text2
      )
      : "";

    return (
      <View style={[style.body, style.success]}>
        <MaterialCommunityIcons
          name="check-all"
          size={iconSiZe}
          color={success_border}
        />
        <View style={style.textContainer}>
          <Text style={style.title}>{text1 ?? "Correcto"}</Text>
          <Text style={style.text}>{modifiedText}</Text>
        </View>
      </View>
    );
  },
};

const style = StyleSheet.create({
  body: {
    width: "96%",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    borderWidth: 1,
    elevation: 9,
  },

  error: {
    borderColor: error_border,
    shadowColor: error_border,
  },

  success: {
    borderColor: success_border,
    shadowColor: success_border,
  },

  title: {
    color: "rgb(16, 16, 16)",
    fontSize: 20,
    fontWeight: "700",
  },

  text: {
    color: "rgb(56, 56, 56)",
    fontSize: 17,
    fontWeight: "500",
  },
  textContainer: {
    justifyContent: "center",
    gap: 2,
  },
});
