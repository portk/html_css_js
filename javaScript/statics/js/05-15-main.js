// import { export이름1, export이름2 } from 'OOO.js';
import { plus } from "./05-14-module.js";
import { minus, height, weight, Animal } from "./05-15-module.js";

console.log(plus());
console.log(minus());
console.log(height);
console.log(weight);
const animal = new Animal('ShuShu');
console.log(animal.name);