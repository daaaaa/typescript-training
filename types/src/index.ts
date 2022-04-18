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
    contact: number,
}

type Employee = {
    id: string,
    company: string,
    dept: string,
    contact: string,
}

type EmployedPerson = Person & Employee

let typeTest = ({} as EmployedPerson).contact

// function correlateData(peopleData: Person[], staff: Employee[]): EmployedPerson[] {
//     const defaults = { company: "None", dept: "None" }
//     return peopleData.map(p => ({
//         ...p,
//         ...staff.find(e => e.id === p.id) || { ...defaults, id: p.id }
//     }))
// }

// const people: Person[] = [
//     { id: "bsmith", name: "Bob Smith", city: "London" },
//     { id: "ajones", name: "Alice Jones", city: "Paris" },
//     { id: "dpeters", name: "Dora Peters", city: "Nwe York" },
// ]

// const employees: Employee[] = [
//     { id: "bsmith", company: "Acme Co", dept: "Sales" },
//     { id: "dpeters", company: "Acme Co", dept: "Development" },
// ]

// const dataItems: EmployedPerson[] = correlateData(people, employees)

function isPerson(testObj: any): testObj is Person {
    return testObj.city !== undefined
}

function writePerson(per: Person): void {
    console.log(`Person: ${per.id}: ${per.name}: ${per.city}`)
}

function writeEmployee(emp: Employee): void {
    console.log(`Employee: ${emp.id}: ${emp.company}: ${emp.dept}`)
}

// dataItems.forEach(item => {
//     writePerson(item)
//     writeEmployee(item)
// })