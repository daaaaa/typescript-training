import { City, Person, Product, Employee } from "./dataTypes"

type Mapped<T> = {
    [P in keyof T]: T[P]
}

const p: Mapped<Product> = { name: "Kayak", price: 275 }
console.log(`Mapped type: ${p.name}, ${p.price}`)

const c: Mapped<City> = { name: "London", population: 8136000 }
console.log(`Mapped type: ${c.name}, ${c.population}`)

// const e = new Employee("Bob Smith", "Sales")
// const products = [
//     p,
//     new Product("Hat", 25),
// ]

// type shapeType = { name: string }

// class Collection<T, K extends keyof T> implements Iterable<T> {
//     private items: Map<T[K], T>

//     constructor(private initialItems: T[] = [], private propertyName: K) {
//         this.items = new Map<T[K], T>()
//         this.add(...initialItems)
//     }

//     add(...newItems: T[]): void {
//         newItems.forEach(newItem => this.items.set(newItem[this.propertyName], newItem))
//     }

//     get(key: T[K]): T {
//         return this.items.get(key)
//     }

//     get count(): number {
//         return this.items.size
//     }

//     [Symbol.iterator](): Iterator<T> {
//         return this.items.values()
//     }
// }
// const productCollection: Collection<Product, "name"> = new Collection(products, "name")
// console.log(`There are ${ productCollection.count } products`)

// const itemByKey = productCollection.get("Hat")
// console.log(`Item: ${itemByKey.name}, ${itemByKey.price}`)

// const productCollectionByPrice: Collection<Product, "price"> = new Collection(products, "price")
// console.log(`There are ${ productCollectionByPrice.count } products`)

// const itemByKeyPrice = productCollectionByPrice.get(100)
// console.log(`Item: ${itemByKey.name}, ${itemByKey.price}`)
