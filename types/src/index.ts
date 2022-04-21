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

const data: (Person | Product)[] = [
    new Employee("Bob Smith", "Acme"),
    new SportProduct("Running Shoes", "Running", 90.50),
    new Employee("Dora Peters", "BigCo"),
]

data.forEach(item => {
    if ("getDetails" in item) {
        console.log(`Person: ${item.getDetails()}`)
    } else {
        console.log(`Product: ${item.name}, ${item.price}`)
    }
})