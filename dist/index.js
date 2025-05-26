"use strict";
// Tipos básicos
let idade = 5;
const firstName = "Gabriel";
const isValid = true;
let idk = 5;
idk = "12";
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ["Felipe", "Gabriel"];
// Tupla
const person = [1, "Jane"];
// Lista de Tuplas
const people = [
    [1, "Jane"],
    [2, "Gabriel"],
];
// Intersections
const productId = false;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(direction);
