class Person {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    getDetails() {
        return `${this.name}, ${this.getSpecificDetails()}`;
    }
}
class Employee extends Person {
    constructor(id, name, dept, city) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
    getSpecificDetails() {
        return `works in ${this.dept}`;
    }
}
class Customer extends Person {
    constructor(id, name, city, creditLimit) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
    }
    getSpecificDetails() {
        return `has ${this.creditLimit} limit`;
    }
}
class Supplier extends Person {
    constructor(id, name, city, CompanyName) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.city = city;
        this.CompanyName = CompanyName;
    }
    getSpecificDetails() {
        return `works in ${this.CompanyName}`;
    }
}
const salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
// salesEmployee.id = "fidel"
const data = [
    salesEmployee,
    new Customer("ajones", "Alice Jones", "London", 500), ,
];
data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));
data.forEach(item => {
    console.log(item.getDetails());
});
