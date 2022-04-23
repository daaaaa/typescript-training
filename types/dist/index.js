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
// type dataType = Person | Product
class DataCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    filter(predicate) {
        return this.items.filter(item => predicate(item));
    }
    static reverse(items) {
        return items.reverse();
    }
}
const mixedData = new DataCollection([...people, ...products]);
function isProduct(target) {
    return target instanceof dataTypes_1.Product;
}
const filteredProducts = mixedData.filter(isProduct);
filteredProducts.forEach(e => console.log(`Product ${e.name}, ${e.price}`));
const reversedCities = DataCollection.reverse(cities);
reversedCities.forEach(e => console.log(`City ${e.name}, ${e.population}`));
