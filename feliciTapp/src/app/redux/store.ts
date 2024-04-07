import { configureStore } from "@reduxjs/toolkit";
import onboardingSlice from "./OnboardingSlice";
import themeSlice from "./ThemeSlice";
import userInfoSlice from "./UserInfoSlice";
import changeThemeSlice from "./changeThemeSlice";
import FavoritePhraseSlice from "./FavoritePhraseSlice";
import DedicateSlice from "./DedicateSlice";
export default configureStore({
  reducer: {
    onboarding: onboardingSlice,
    theme: themeSlice,
    userInfo: userInfoSlice,
    changeTheme: changeThemeSlice,
    FavoritePhrases:FavoritePhraseSlice,
    Dedicate:DedicateSlice
  },
});
