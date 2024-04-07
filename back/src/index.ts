import express from "express";
import routes from "./routes";
import "./db/index";
import { task_1 } from "./automate";
const app = express();
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("app listen");
  //  task_1();
  return;
});
