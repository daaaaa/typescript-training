const enum Feature { Waterproof, Insulated }

type Product = {
    id: number,
    name: string,
    price?: number,
}

type Person = {
    id: string,
    name: string,
    city: string,
}

type UnionType = {
    id: number | string,
    name: string,
}

const hat = { id: 1, name: "Hat", price: 100 }
const gloves = { id: 2, name: "Gloves", price: 75 }
const umbrella = { id: 3, name: "Umbrella", price: 30 }
const bob = { id: "bsmith", name: "Umbrella", city: "London" }

const dataItems: (Person | Product)[] = [hat, gloves, umbrella, bob]

function isPerson(testObj: any): testObj is Person {
    return testObj.city !== undefined
}

dataItems.forEach(item => {
    if (isPerson(item)) {
        console.log(`Person: ${item.name}: ${item.city}`)
    } else {
        console.log(`Product: ${item.name}: ${item.price}`)
    }
})