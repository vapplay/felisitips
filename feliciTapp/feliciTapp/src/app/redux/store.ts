import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "@react-native-async-storage/async-storage";
import onboardingSlice from "./OnboardingSlice";
import themeSlice from "./ThemeSlice";
import userInfoSlice from "./UserInfoSlice";
import changeThemeSlice from "./changeThemeSlice";
import FavoritePhraseSlice from "./FavoritePhraseSlice";
import DedicateSlice from "./DedicateSlice";
import swiperSlice from "./useImageStorage";
import changeFavorite from "./changeFavorite";

const persistConfig = {
  key: "root", // key of the persister  <==
  storage,
  whitelist: [
    "userInfo",
    "FavoritePhrases",
    "theme",
    "onboarding",
    "swiper",
    "changeTheme",
  ],
};

const rootReducer = combineReducers({
  onboarding: onboardingSlice,
  theme: themeSlice,
  userInfo: userInfoSlice,
  changeTheme: changeThemeSlice,
  FavoritePhrases: FavoritePhraseSlice,
  Dedicate: DedicateSlice,
  swiper: swiperSlice,
  changeFavorite: changeFavorite,
});

const persistedReducer = persistReducer(persistConfig, rootReducer); // the persister  faction <-

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

const persistor = persistStore(store); //  storage  <==

export { store, persistor };
