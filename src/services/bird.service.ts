// poner with {type: "json"} cuando se importe por em module
import { promises } from "node:dns";
import aves from "./birds.json" with { type: "json" };

let idgen: number = 0;

interface bird {
  id: number;
  name: string;
  family: string;
}

const birds: bird[] = [];

export const findAllBirds = () => {
  console.log("sa");
  return birds;
};



export const findBirdById = (id: number) => {
  const bid = birds.find((e) => e.id == id);
  return bid || null;
};

export const addBird = (name: string, family: string) => {
  const newBird: bird = {
    id: idgen,
    name: name,
    family: family,
  };
  birds.push(newBird);
  idgen++;
};

export const deleteBird = (id: number) => {
  let birdIndex = birds.findIndex((e) => e.id === id);
  let bird = birds.find((e) => e.id === id);
  if (birdIndex < 0) {
    return null;
  } else {
    birds.splice(birdIndex, 1);
    return bird;
  }
};
