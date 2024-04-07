import {
  addPhrase,
  dropPhrase,
  getAllPhrase,
  addTheme,
  getAllThemes,
  dropTheme,
  updatePhrase,
  searchAllPhrase,
} from "../../controller";

const RoutesListPost = [
  {
    route: "/add-phrase",
    function: addPhrase,
  },

  {
    route: "/add-addTheme",
    function: addTheme,
  },
  {
    route: "/update-phrase",
    function: updatePhrase,
  },
];

const RoutesListGet = [
  {
    route: "/get-phrase",
    function: getAllPhrase,
  },
  {
    route: "/delete-phrase",
    function: dropPhrase,
  },
  {
    route: "/delete-phrase",
    function: dropTheme,
  },
  {
    route: "/get-theme",
    function: getAllThemes,
  },

  {
    route: "/search",
    function: searchAllPhrase,
  },
];

export { RoutesListPost, RoutesListGet };
