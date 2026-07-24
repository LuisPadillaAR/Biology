import express, {} from "express";
const birdRoute = express.Router();
birdRoute.get("/", (req, res) => res.send("ALL BIRDS"));
birdRoute.get("/:id", (req, Res) => Res.send("ID BIRD"));
birdRoute.post("/", (req, res) => res.send("ADD BIRD"));
birdRoute.put("/", (req, res) => res.send("UPDATE BIRD"));
birdRoute.delete("/", (req, res) => res.send("DELETE BIRD"));
export default birdRoute;
//# sourceMappingURL=bird.routes.js.map