const hat = { name: "Hat", price: 100 };
const gloves = { name: "Gloves", price: 75 };
const umbrella = {
    name: "Umbrella",
    price: 30,
    waterproof: true,
    hasFeature: (feature) => feature === 0 /* Waterproof */
};
const mirrorShades = { name: "Sunglasses", price: 54, finish: "mirrored" };
const darkShades = { name: "Sunglasses", price: 54, finish: "mirrored" };
const products = [hat, gloves, umbrella, mirrorShades, darkShades];
products.forEach(prod => console.log(`${prod.name}: ${prod.price} - Waterproof: ${prod.hasFeature ? prod.hasFeature(0 /* Waterproof */) : false}`));
