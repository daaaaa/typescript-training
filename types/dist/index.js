"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
function convertProduct(p) {
    return {
        name: p.name,
        price: `$${p.price.toFixed(2)}`,
    };
}
const dataArray = [
    new dataTypes_1.Product("Kayak", 275),
    new dataTypes_1.Person("Bob", "London"),
    new dataTypes_1.Product("Lifejacket", 48.95),
];
const kayak = convertProduct(dataArray[0]);
console.log(`Product: ${kayak.name}, ${kayak.price}`);
