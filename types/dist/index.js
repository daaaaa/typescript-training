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
    collate(targetData, itemProp, targetProp) {
        const result = [];
        this.items.forEach(item => {
            const match = targetData.find(d => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                result.push({ ...match, ...item });
            }
        });
        return result;
    }
}
class SearchableCollection extends DataCollection {
    constructor(initialItems) {
        super(initialItems);
    }
    find(searchTerm) {
        return this.items.filter(item => item.name === searchTerm || item.role === searchTerm);
    }
}
const employeeData = new SearchableCollection(employees);
const foundEmployees = employeeData.find("Sales");
foundEmployees.forEach(e => console.log(`Employee ${e.name}, ${e.role}`));
