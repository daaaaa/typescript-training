function correlateData(peopleData, staff) {
    const defaults = { company: "None", dept: "None" };
    return peopleData.map(p => ({
        ...p,
        ...staff.find(e => e.id === p.id) || { ...defaults, id: p.id }
    }));
}
const people = [
    { id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "Nwe York" },
];
const employees = [
    { id: "bsmith", company: "Acme Co", dept: "Sales" },
    { id: "dpeters", company: "Acme Co", dept: "Development" },
];
const dataItems = correlateData(people, employees);
function isPerson(testObj) {
    return testObj.city !== undefined;
}
dataItems.forEach(item => {
    console.log(`Person: ${item.id}: ${item.name}: ${item.city}`);
    console.log(`Employee: ${item.id}: ${item.company}: ${item.dept}`);
});
