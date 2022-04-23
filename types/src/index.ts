import { Person, Product } from "./dataTypes"

const people = [
    new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"),
]

const products = [
    new Product("Running Shoes", 100),
    new Product("Hat", 25)
];

// type dataType = Person | Product

class DataCollection<T> {
    private items: T[] = []

    constructor(initialItems: T[]) {
        this.items.push(...initialItems)
    }

    add(newItem: T) {
        this.items.push(newItem)
    }

    // getNames(): string[] {
    //     return this.items.map(item => item.name)
    // }

    getItem(index: number): T {
        return this.items[index]
    }
}

const peopleData = new DataCollection<Person>(people)

// console.log(`Names: ${peopleData.getNames().join(", ")}`)
const firstPerson = peopleData.getItem(0)
// if (firstPerson instanceof Person) {
    console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`)
// }

const productData = new DataCollection<Product>(products)
const firstProduct = productData.getItem(0)
console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`)


