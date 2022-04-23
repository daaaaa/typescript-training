import { City, Person, Product, Employee } from "./dataTypes"

const products = [
    new Product("Running Shoes", 100),
    new Product("Hat", 25),
]

type shapeType = { name: string }

class Collection<T extends shapeType> {
    private items: Map<string, T>

    constructor(private initialItems: T[] = []) {
        this.items = new Map<string, T>()
        this.add(...initialItems)
    }

    add(...newItems: T[]): void {
        newItems.forEach(newItem => this.items.set(newItem.name, newItem))
    }

    get(name: string): T {
        return this.items.get(name)
    }

    get count(): number {
        return this.items.size
    }
}
const productCollection: Collection<Product> = new Collection(products)
console.log(`There are ${ productCollection.count } products`)

const p = productCollection.get("Hat")
console.log(`Product: ${ p.name }, ${ p.price }`)
