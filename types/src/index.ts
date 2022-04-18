const hat = { name: "Hat", price: 100 }
const gloves = { name: "Gloves", price: 75 }
const products = [hat, gloves]

products.forEach(prod => console.log(`${prod.name}: ${prod.price}`))