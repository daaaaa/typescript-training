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

class DataCollection<T> {
    protected items: T[] = []

    constructor(initialItems: T[]) {
        this.items.push(...initialItems)
    }

    filter<V extends T>(predicate: (target: any) => target is V): V[] {
        return this.items.filter(item => predicate(item)) as V[]
    }

    static reverse<ArrayType>(items: ArrayType[]): ArrayType[] {
        return items.reverse()
    }
}

const mixedData = new DataCollection<Person | Product>([...people, ...products])
function isProduct(target): target is Product {
    return target instanceof Product
}

const filteredProducts = mixedData.filter<Product>(isProduct)
filteredProducts.forEach(e => console.log(`Product ${e.name}, ${e.price}`))


const reversedCities = DataCollection.reverse<City>(cities)
reversedCities.forEach(e => console.log(`City ${e.name}, ${e.population}`))