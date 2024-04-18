import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  btn: {},

  title: {},

  text: {},

  Onboarding_screen_text: {},
  Onboarding_screen_text_font_family: {},
  Onboarding_GetUserNameScreen_Styles: {
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 5,
  },
});

export const theme = {
  dark: false,

  home: {
    backgroundImage:"https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYvJe6P244kjpx0-y-g7ZSAA_BlW4F_XDKWB56T57PkBBu5Yeoa_Os6L-vj61OjPsHhHu07K2YnEbFY7RFMi_evjvwCPwZkLfk=w1920-h955-rw-v1", /// <==  aqui ba la url de la imagen inicial
  },

  dedicate:{
    title:"Dedica esta frase a alguien especial, dime su nombre ..."
  },

  colors: {
    withe: "white",
    cream: "white",
    btn: "#009FE3",
    btn_icon: "rgb(241, 241, 241)",
    title: "rgb(17, 17, 17)",
  },
  defaultFont: "Raleway-Medium",
  Onboarding: {
    GetUserNameScreen: {
      title: {
        text: '"Dime tu nombre para regalarte una frase motivadora dedicada especialmente para ti."',
        Styles: {
          ...Styles.Onboarding_GetUserNameScreen_Styles,
        },
      },
    },
    screen: {
      screen: "rgb(255, 255, 252)",
      btn: "rgb(32, 32, 32)",
      nex_btn: "blue",
      indicators: "rgb(32, 32, 32)",
      text: "rgb(24, 24, 24)",
    },
    Styles: {
      text: {
        Styles: {
          ...Styles.Onboarding_screen_text,
        },
      },
      pagination: {
        colors: ["rgb(46, 122, 194)", "rgb(46, 122, 194)", "rgb(46, 122, 194)"],
      },
      btn: {
        colors: ["rgb(46, 122, 194)", "rgb(46, 122, 194)", "rgb(46, 122, 194)"],
      },
    },
  },

  style: {
    ...Styles,
  },
};
