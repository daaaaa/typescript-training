import { City, Person, Product } from "./dataTypes"

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

// type dataType = Person | Product

class DataCollection<T extends { name: string }, U> {
    private items: T[] = []

    constructor(initialItems: T[]) {
        this.items.push(...initialItems)
    }

    collate(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
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

const peopleData = new DataCollection<Person, City>(people)
const collatedData = peopleData.collate(cities, "city", "name")

collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`))
