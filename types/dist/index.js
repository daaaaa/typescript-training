const hat = { name: "Hat", price: 100 };
const gloves = { name: "Gloves", price: 75 };
const umbrella = {
    name: "Umbrella",
    price: 30,
    waterproof: true,
    hasFeature: (feature) => feature === 0 /* Waterproof */
};
const products = [hat, gloves, umbrella];
products.forEach(prod => console.log(`${prod.name}: ${prod.price} - Waterproof: ${prod.hasFeature ? prod.hasFeature(0 /* Waterproof */) : false}`));
