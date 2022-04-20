class Person {
    constructor(
        public id: string,
        public name: string,
        public city: string
    ) {}
}

class Employee extends Person {
    constructor(
        public readonly id: string,
        public name: string,
        private dept: string,
        public city: string) {
            super(id, name, city)
        }

    writeDept() {
        console.log(`${this.name} works in ${this.dept}`)
    }
}

class Customer extends Person {
    constructor(
        public readonly id: string,
        public name: string,
        public city: string,
        public creditLimit: number) {
            super(id, name, city)
        }
}

class Supplier extends Person {
    constructor(
        public readonly id: string,
        public name: string,
        public city: string,
        public CompanyName: string) {
            super(id, name, city)
        }
}
 

const salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris")
salesEmployee.writeDept()
// salesEmployee.id = "fidel"

const data: Person[] = [
    salesEmployee,
    new Customer("ajones", "Alice Jones", "London", 500),,
]

data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"))

data.forEach(item => {
    console.log(`${item.id} ${item.name}, ${item.city}`)
    if (item instanceof Employee) {
        item.writeDept()
    } else if (item instanceof Customer) {
        console.log(`Customer ${item.name} has ${item.creditLimit} limit`)
    } else if (item instanceof Supplier) {
        console.log(`Supplier ${item.name} works for ${item.CompanyName}`)
    }
})