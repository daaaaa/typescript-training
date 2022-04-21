interface Person {
    name: string
    getDetails(): string
}

interface DogOwner {
    dogName: string
    getDogDetails(): string
}

class Employee implements Person {
    constructor(
        public readonly id: string,
        public name: string,
        private dept: string,
        public city: string) {
        }

    getDetails(): string  {
        return `${this.name} works in ${this.dept}`
    }
}

class Customer implements Person, DogOwner {
    constructor(
        public readonly id: string,
        public name: string,
        public city: string,
        public creditLimit: number,
        public dogName,
    ) {}
    
    getDetails(): string {
        return `${this.name} has ${this.creditLimit} limit`
    }

    getDogDetails(): string {
        return `${this.name} has a dog named ${this.dogName}`
    }
}

const alice = new Customer("ajones", "Alice Jones", "London", 500, "Fido")
const dogOwners: DogOwner[] = [alice]

dogOwners.forEach(item => console.log(item.getDogDetails()))

const data: Person[] = [
    new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
    alice,
]

data.forEach(item => {
    console.log(item.getDetails())
})