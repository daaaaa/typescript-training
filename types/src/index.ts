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

class DataCollection<T extends { name: string }> {
    private items: T[] = []

    constructor(initialItems: T[]) {
        this.items.push(...initialItems)
    }

    add(newItem: T) {
        this.items.push(newItem)
    }

    getNames(): string[] {
        return this.items.map(item => item.name)
    }

    getItem(index: number): T {
        return this.items[index]
    }
}

const peopleData = new DataCollection<Person>(people)
const firstPerson = peopleData.getItem(0)
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`)
console.log(`Person Names: ${peopleData.getNames().join(", ")}`)


const productData = new DataCollection<Product>(products)
const firstProduct = productData.getItem(0)
console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`)
console.log(`Product Names: ${productData.getNames().join(", ")}`)

const cityData = new DataCollection<City>(cities)
console.log(`Citiy Names: ${cityData.getNames().join(", ")}`)


