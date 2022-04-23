import { City, Person, Product, Employee } from "./dataTypes"

type changeProps<T, U, V> = {
    [P in keyof T]: T[P] extends U ? V : T[P]
}

type modifiedProduct = changeProps<Product, number, string>

function convertProduct(p: Product): modifiedProduct {
    return {
        name: p.name,
        price: `$${p.price.toFixed(2)}`,
    }
}

const dataArray = [
    new Product("Kayak", 275),
    new Person("Bob", "London"),
    new Product("Lifejacket", 48.95),
]

const kayak = convertProduct(dataArray[0] as Product)
console.log(`Product: ${kayak.name}, ${kayak.price}`)

