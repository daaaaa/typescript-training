const hat = { id: 1, name: "Hat", price: 100 };
const gloves = { id: 2, name: "Gloves", price: 75 };
const umbrella = { id: 3, name: "Umbrella", price: 30 };
const bob = { id: "bsmith", name: "Umbrella", city: "London" };
const dataItems = [hat, gloves, umbrella, bob];
dataItems.forEach(item => {
    if ("city" in item) {
        console.log(`Person: ${item.name}: ${item.city}`);
    }
    else {
        console.log(`Product: ${item.name}: ${item.price}`);
    }
});
