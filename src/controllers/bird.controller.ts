import { type Request, type Response } from "express";
import {
  findAllBirds,
  findBirdById,
  addBird,
  deleteBird,
} from "../services/bird.service.js";

interface bird {
  id: string;
}

export const getBirds = (req: Request, res: Response) => {
  const birds = findAllBirds();
  res.json(birds);
};

export const getBirdById = (req: Request<bird>, res: Response) => {
  const bird = findBirdById(parseInt(req.params.id));
  bird ? res.json(bird) : res.status(404).json({ error: "no existe" });
};

export const createBird = (req: Request, res: Response) => {
  addBird("a", "a");
  res.send("add");
};

export const deleteBirdById = (req: Request<bird>, res: Response) => {
  if (deleteBird(parseInt(req.params.id))) {
    let bird = deleteBird(parseInt(req.params.id));
    res.json(bird).status(200);
  } else {
    res.status(404).json({ error: "NO EXIST" });
  }
};
