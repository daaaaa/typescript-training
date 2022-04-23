import { City, Person, Product, Employee } from "./dataTypes"

function getValue<T, K extends keyof T>(item: T, keyname: K) {
    console.log(`Value: ${item[keyname]}`);
}

type priceType = Product["price"]
type allTypes = Product[keyof Product]

const p = new Product("Running Shoes", 100)
getValue<Product, "name">(p, "name")
getValue<Product, ("name" | "price")>(p, "price")
getValue<Product, keyof Product>(p, "price")

const e = new Employee("Bob Smith", "Sales")
getValue(e, "name")
getValue(e, "role")

const products = [
    p,
    new Product("Hat", 25),
]

type shapeType = { name: string }

class Collection<T extends shapeType> implements Iterable<T> {
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

    [Symbol.iterator](): Iterator<T> {
        return this.items.values()
    }
}
const productCollection: Collection<Product> = new Collection(products)
console.log(`There are ${ productCollection.count } products`);

[...productCollection].forEach(p => console.log(`Product: ${p.name}, ${p.price}`))