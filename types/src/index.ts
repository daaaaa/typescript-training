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
    contact: { phone: number },
    getContact(field: string): string,
}

type Employee = {
    id: string,
    company: string,
    dept: string,
    contact: { name: string },
    getContact(field: number): number,
}

type EmployedPerson = Person & Employee

const person: EmployedPerson = {
    id: "bsmith",
    name: "Bob Smith",
    city: "London",
    company: "Acme Co",
    dept: "Sales",
    contact: { name: "Alice", phone: 123123123 },
    getContact(field: string | number): any {
        return typeof field === "string" ? "Alice" : 6512346543
    }
}

const typeTest = person.getContact
const stringParamTypeTest = person.getContact("Alice")
const numberParamTypeTest = person.getContact(123)


console.log(`Contact: ${person.getContact("Alice")}`)
console.log(`Contact: ${person.getContact(123)}`)