import express from "express";
import { getBirds, getBirdById, createBird, deleteBirdById, } from "../controllers/bird.controller.js";
const birdRoute = express.Router();
birdRoute
    .get("/", getBirds)
    .get("/:id", getBirdById)
    .post("/", createBird)
    .delete("/:id", deleteBirdById)
    .put("/:id", (req, res) => res.send("UPDATE BIRD"));
export default birdRoute;
