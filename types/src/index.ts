interface Person {
    name: string
    getDetails(): string
}

interface Product {
    name: string,
    price: number
}

class Employee implements Person {
    constructor(
        public name: string,
        public company: string,
    ) {}

    getDetails(): string  {
        return `${this.name} works in ${this.company}`
    }
}

class SportProduct implements Product {
    constructor(
        public name: string,
        public category: string,
        public price: number,
    ) {}
}

class ProductGroup {
    constructor(...initialProducts: [string, Product][]) {
        initialProducts.forEach(p => this[p[0]] = p[1])
    }

    [properryName: string]: Product
}

let group = new ProductGroup(
    ["shows", new SportProduct("Shows", "Running", 90.50)]
)
group.hat = new SportProduct("Hat", "Skiing", 20)

let total = group.hat.price + group.boots.price
console.log(`Total: ${total}`)