const enum Feature { Waterproof, Insulated }

type Product = {
    name: string,
    price?: number,
    hasFeature?(Feature): boolean
}

const hat = { name: "Hat", price: 100 }
const gloves = { name: "Gloves", price: 75 }
const umbrella = {
    name: "Umbrella",
    price: 30,
    waterproof: true,
    hasFeature: (feature: Feature) => feature === Feature.Waterproof
}
const products: Product[] = [hat, gloves, umbrella]

products.forEach(prod => console.log(`${prod.name}: ${prod.price} - Waterproof: ${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : false}`))