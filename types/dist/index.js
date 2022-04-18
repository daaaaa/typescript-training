let typeTest = {}.contact;
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
const person1 = {
    id: "bsmith",
    name: "Bob Smith",
    city: "London",
    company: "Acme Co",
    dept: "Sales",
    contact: { name: "Alice", phone: 123123123 },
};
const person2 = {
    id: "ajones",
    name: "Alice Jones",
    city: "Paris",
    company: "Acme Co",
    dept: "Development",
    contact: { name: "Alice", phone: 123123123 },
};
// const employees: Employee[] = [
//     { id: "bsmith", company: "Acme Co", dept: "Sales" },
//     { id: "dpeters", company: "Acme Co", dept: "Development" },
// ]
// const dataItems: EmployedPerson[] = correlateData(people, employees)
function isPerson(testObj) {
    return testObj.city !== undefined;
}
function writePerson(per) {
    console.log(`Person: ${per.id}: ${per.name}: ${per.city}`);
}
function writeEmployee(emp) {
    console.log(`Employee: ${emp.id}: ${emp.company}: ${emp.dept}`);
}
// dataItems.forEach(item => {
//     writePerson(item)
//     writeEmployee(item)
// })
