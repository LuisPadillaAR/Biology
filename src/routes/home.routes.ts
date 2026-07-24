import express, { type Request, type Response } from "express";

const home = express.Router();

home.get("/", (req: Request, res: Response) => res.send("Home desde Routes"));

export default home;
