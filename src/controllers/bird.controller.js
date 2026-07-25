import { findAllBirds, findBirdById, addBird, deleteBird, } from "../services/bird.service.js";
export const getBirds = async (req, res) => {
    console.log("find");
    const birds = await findAllBirds();
    res.json(birds);
};
export const getBirdById = (req, res) => {
    const bird = findBirdById(parseInt(req.params.id));
    bird ? res.json(bird) : res.status(404).json({ error: "no existe" });
};
export const createBird = (req, res) => {
    addBird("a", "a");
    res.send("add");
};
export const deleteBirdById = (req, res) => {
    if (deleteBird(parseInt(req.params.id))) {
        let bird = deleteBird(parseInt(req.params.id));
        res.json(bird).status(200);
    }
    else {
        res.status(404).json({ error: "NO EXIST" });
    }
};
