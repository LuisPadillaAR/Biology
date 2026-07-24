// poner with {type: "json"} cuando se importe por em module
import aves from "./birds.json" with { type: "json" };
let idgen = 0;
const birds = [];
export const findAllBirds = () => {
    return birds;
};
export const findBirdById = (id) => {
    const bid = birds.find((e) => e.id == id);
    return bid || null;
};
export const addBird = (name, family) => {
    const newBird = {
        id: idgen,
        name: name,
        family: family,
    };
    birds.push(newBird);
    idgen++;
};
export const deleteBird = (id) => {
    let birdIndex = birds.findIndex((e) => e.id === id);
    let bird = birds.find((e) => e.id === id);
    if (birdIndex < 0) {
        return null;
    }
    else {
        birds.splice(birdIndex, 1);
        return bird;
    }
};
//# sourceMappingURL=bird.service.js.map