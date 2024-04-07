"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const list_1 = require("./list");
const routes = (0, express_1.Router)();
routes.get("/", (req, res) => {
    res.send("hola");
});
list_1.RoutesListPost.map((e) => {
    return routes.post(e.route, e.function);
});
list_1.RoutesListGet.map((e) => {
    return routes.get(e.route, e.function);
});
exports.default = routes;
