"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
const people = [
    new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York"),
];
const products = [
    new dataTypes_1.Product("Running Shoes", 100),
    new dataTypes_1.Product("Hat", 25)
];
// type dataType = Person | Product
class DataCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    add(newItem) {
        this.items.push(newItem);
    }
    // getNames(): string[] {
    //     return this.items.map(item => item.name)
    // }
    getItem(index) {
        return this.items[index];
    }
}
const peopleData = new DataCollection(people);
// console.log(`Names: ${peopleData.getNames().join(", ")}`)
const firstPerson = peopleData.getItem(0);
// if (firstPerson instanceof Person) {
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
// }
const productData = new DataCollection(products);
const firstProduct = productData.getItem(0);
console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`);
