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
const cities = [
    new dataTypes_1.City("London", 8136000),
    new dataTypes_1.City("Paris", 2141000),
];
const employees = [
    new dataTypes_1.Employee("Bob Smith", "Sales"),
    new dataTypes_1.Employee("Alice Jones", "Sales"),
];
class PersonCollection {
    constructor() {
        this.items = [];
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    get(name) {
        return this.items.find(item => item.name === name);
    }
    get count() {
        return this.items.length;
    }
}
const peopleCollection = new PersonCollection();
peopleCollection.add(new dataTypes_1.Person("Bob Smith", "London"), new dataTypes_1.Person("Dora Peters", "New York"));
console.log(`Collection size: ${peopleCollection.count}`);
