import express, { type Request, type Response } from "express";
import {
  getBirds,
  getBirdById,
  createBird,
  deleteBirdById,
} from "../controllers/bird.controller.js";

const birdRoute = express.Router();

birdRoute
  .get("/", getBirds)
  .get("/:id", getBirdById)
  .post("/", createBird)
  .delete("/:id", deleteBirdById)
  .put("/:id", (req: Request, res: Response) => res.send("UPDATE BIRD"));

export default birdRoute;
