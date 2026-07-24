import express, {
  json,
  type Express,
  type Request,
  type Response,
} from "express";
import home from "./routes/home.routes.js";
import birdRoute from "./routes/bird.routes.js";

const app: Express = express();
const PORT: number = 3000;

app.use(json());

app.use("/", home);
app.use("/birds", birdRoute);

app.listen(PORT, () => console.log("Corriendo..."));
