const hat = { name: "Hat", price: 100 }
const gloves = { name: "Gloves", price: 75 }
const umbrella = { name: "Umbrella" }
const products = [hat, gloves, umbrella]

products.forEach(prod => console.log(`${prod.name}: ${prod.price}`))