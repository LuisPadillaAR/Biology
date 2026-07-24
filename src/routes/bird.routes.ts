import express, { type Request, type Response} from "express";

const birdRoute = express.Router();

birdRoute.get("/", (req: Request, res: Response) => res.send("ALL BIRDS"));
birdRoute.get("/:id", (req: Request, Res: Response) => Res.send("ID BIRD") );
birdRoute.post("/", (req: Request, res: Response) => res.send("ADD BIRD"))
birdRoute.put("/", (req: Request, res: Response) => res.send("UPDATE BIRD"))
birdRoute.delete("/", (req: Request, res: Response) => res.send("DELETE BIRD"))
export default birdRoute;
