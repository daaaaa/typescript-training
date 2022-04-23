import { City, Person, Product, Employee } from "./dataTypes"

type Result<T> = T extends (...args: any) => infer R ? R : never

function processArray<T, Func extends (T) => any>(data: T[], func: Func): Result<Func>[] {
    return data.map(item => func(item))
}

const selectName = (p: Product) => p.name

const products = [
    new Product("Kayak", 275),
    new Product("Lifejacket", 48.95),
]

const names: string[] = processArray(products, selectName)


names.forEach(name => console.log(`Name: ${name}`))

