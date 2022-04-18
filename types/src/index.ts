const enum Feature { Waterproof, Insulated }

const hat = { name: "Hat", price: 100 }
const gloves = { name: "Gloves", price: 75 }
const umbrella = {
    name: "Umbrella",
    price: 30,
    waterproof: true,
    hasFeature: (feature: Feature) => feature === Feature.Waterproof
}
const products: {
    name: string,
    price?: number,
    hasFeature?(Feature): boolean }[] = [hat, gloves, umbrella]

products.forEach(prod => console.log(`${prod.name}: ${prod.price} - Waterproof: ${prod.hasFeature(Feature.Waterproof)}`))