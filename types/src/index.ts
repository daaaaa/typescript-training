import { City, Person, Product, Employee } from "./dataTypes"

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

// type dataType = Person | Product

class DataCollection<T extends { name: string }> {
    private items: T[] = []

    constructor(initialItems: T[]) {
        this.items.push(...initialItems)
    }

    collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
        const result = []
        this.items.forEach(item => {
            const match = targetData.find(d => d[targetProp] === item[itemProp])
            if (match !== undefined) {
                result.push({ ...match, ...item })
            }
        })
        return result
    }
}

const peopleData = new DataCollection<Person>(people)
const collatedData = peopleData.collate<City>(cities, "city", "name")
collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`))

const empData = peopleData.collate<Employee>(employees, "name", "name")
empData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.role}`))
