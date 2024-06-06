import { theme } from "../theme/theme";

export type RoutesListType = {
  name: string;
  component: () => React.JSX.Element;
  config: {};
};

export type ThemeType = {
  theme: themeTypes;
  userName?: string;
  randomPhrase?:
    | {
        id: string;
        phrase: string;
      }
    | any;
};

export type themeTypes = typeof theme;
