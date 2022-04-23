"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
function getValue(item, keyname) {
    return item[keyname];
}
const p = new dataTypes_1.Product("Running Shoes", 100);
getValue(p, "price");
getValue(p, "price");
console.log(getValue(p, "name"));
console.log(getValue(p, "price"));
const e = new dataTypes_1.Employee("Bob Smith", "Sales");
getValue(e, "name");
getValue(e, "role");
console.log(getValue(e, "name"));
console.log(getValue(e, "role"));
const products = [
    p,
    new dataTypes_1.Product("Hat", 25),
];
class Collection {
    constructor(initialItems = []) {
        this.initialItems = initialItems;
        this.items = new Map();
        this.add(...initialItems);
    }
    add(...newItems) {
        newItems.forEach(newItem => this.items.set(newItem.name, newItem));
    }
    get(name) {
        return this.items.get(name);
    }
    get count() {
        return this.items.size;
    }
    [Symbol.iterator]() {
        return this.items.values();
    }
}
const productCollection = new Collection(products);
console.log(`There are ${productCollection.count} products`);
[...productCollection].forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
