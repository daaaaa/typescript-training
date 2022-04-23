import { City, Person, Product, Employee } from "./dataTypes"

type shapeType = { name: string }
interface Collection<T extends shapeType> {
    add(...newItems: T[]): void
    get(name: string): T
    count: number
}

interface SearchableCollection<T extends shapeType> extends Collection<Product> {
    find(name: string): T | undefined
}

interface ProductCollection extends Collection<Product> {
    sumPrices(): number
}

interface PeopleCollection<T extends Product | Employee> extends Collection<T> {
    getNames(): string
}

const people = [
    new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"),
]

const products = [
    new Product("Running Shoes", 100),
    new Product("Hat", 25)
]

const cities = [
    new City("London", 8136000),
    new City("Paris", 2141000),
]

const employees = [
    new Employee("Bob Smith", "Sales"),
    new Employee("Alice Jones", "Sales"),
]

class PersonCollection implements Collection<Person> {
    private items: Person[] = []

    add(...newItems): void {
        this.items.push(...newItems)
    }

    get(name: string): Person {
        return this.items.find(item => item.name === name)
    }

    get count(): number {
        return this.items.length
    }
}

const peopleCollection: Collection<Person> = new PersonCollection()
peopleCollection.add(
    new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"),
)
console.log(`Collection size: ${peopleCollection.count}`)