"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesListGet = exports.RoutesListPost = void 0;
const controller_1 = require("../../controller");
const RoutesListPost = [
    {
        route: "/add-phrase",
        function: controller_1.addPhrase,
    },
    {
        route: "/add-addTheme",
        function: controller_1.addTheme,
    },
    {
        route: "/update-phrase",
        function: controller_1.updatePhrase,
    },
];
exports.RoutesListPost = RoutesListPost;
const RoutesListGet = [
    {
        route: "/get-phrase",
        function: controller_1.getAllPhrase,
    },
    {
        route: "/delete-phrase",
        function: controller_1.dropPhrase,
    },
    {
        route: "/delete-phrase",
        function: controller_1.dropTheme,
    },
    {
        route: "/get-theme",
        function: controller_1.getAllThemes,
    },
    {
        route: "/search",
        function: controller_1.searchAllPhrase,
    },
];
exports.RoutesListGet = RoutesListGet;
