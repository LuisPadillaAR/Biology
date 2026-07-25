import express, { json, } from "express";
import home from "./routes/home.routes.js";
import birdRoute from "./routes/bird.routes.js";
const app = express();
const PORT = 3000;
app.use(json());
app.use("/", home);
app.use("/birds", birdRoute);
app.listen(PORT, () => console.log("Corriendo..."));
