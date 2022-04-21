class Employee {
    name;
    company;
    constructor(name, company) {
        this.name = name;
        this.company = company;
    }
    getDetails() {
        return `${this.name} works in ${this.company}`;
    }
}
class SportProduct {
    name;
    category;
    price;
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}
class ProductGroup {
    constructor(...initialProducts) {
        initialProducts.forEach(p => this[p[0]] = p[1]);
    }
}
let group = new ProductGroup(["shows", new SportProduct("Shows", "Running", 90.50)]);
group.hat = new SportProduct("Hat", "Skiing", 20);
let total = group.hat.price + group.boots.price;
console.log(`Total: ${total}`);
