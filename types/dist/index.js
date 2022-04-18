const bob = {
    id: "bsmith",
    name: "Umbrella",
    city: "London",
    company: "Acme Co",
    dept: "Sales",
};
const dataItems = [bob];
function isPerson(testObj) {
    return testObj.city !== undefined;
}
dataItems.forEach(item => {
    console.log(`Person: ${item.id}: ${item.name}: ${item.city}`);
    console.log(`Employee: ${item.id}: ${item.company}: ${item.dept}`);
});
