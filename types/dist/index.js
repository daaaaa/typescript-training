const person = {
    id: "bsmith",
    name: "Bob Smith",
    city: "London",
    company: "Acme Co",
    dept: "Sales",
    contact: { name: "Alice", phone: 123123123 },
    getContact(field) {
        return typeof field === "string" ? "Alice" : 6512346543;
    }
};
const typeTest = person.getContact;
const stringParamTypeTest = person.getContact("Alice");
const numberParamTypeTest = person.getContact(123);
console.log(`Contact: ${person.getContact("Alice")}`);
console.log(`Contact: ${person.getContact(123)}`);
