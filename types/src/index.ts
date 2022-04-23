import { City, Person, Product, Employee } from "./dataTypes"

const products = [
    new Product("Running Shoes", 100),
    new Product("Hat", 25),
]

type shapeType = { name: string }

class Collection<T extends shapeType> {
    constructor(
        private items: T[] = []
    ) {}

    add(...newItems: T[]): void {
        this.items.push(...newItems)
    }

    get(name: string): T {
        return this.items.find(item => item.name === name)
    }

    get count(): number {
        return this.items.length
    }
}
const productCollection: Collection<Product> = new Collection(products)
console.log(`There are ${ productCollection.count } products`)

const p = productCollection.get("Hat")
console.log(`Product: ${ p.name }, ${ p.price }`)
