import { Router } from "express";
import { addPhrase } from "../controller";
import { RoutesListGet, RoutesListPost } from "./list";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("hola");
});

RoutesListPost.map((e) => {
  return routes.post(e.route, e.function);
});


RoutesListGet.map((e) => {
  return routes.get(e.route, e.function);
});



export default routes;
