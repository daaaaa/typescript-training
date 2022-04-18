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

type Employee = {
    company: string,
    dept: string,
}

const bob = {
    id: "bsmith",
    name: "Umbrella",
    city: "London",
    company: "Acme Co",
    dept: "Sales",
}

const dataItems: (Person & Employee)[] = [bob]

function isPerson(testObj: any): testObj is Person {
    return testObj.city !== undefined
}

dataItems.forEach(item => {
    console.log(`Person: ${item.id}: ${item.name}: ${item.city}`)
    console.log(`Employee: ${item.id}: ${item.company}: ${item.dept}`)
})