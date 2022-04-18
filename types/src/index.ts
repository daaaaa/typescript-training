function calculateTax(amount: number): number {
    return amount * 1.2
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`)
}

enum Product { Hat, Gloves = 20, Umbrella }

[Product.Hat, Product.Gloves, Product.Umbrella].forEach((productEnum) => {
    console.log(`Enum value: ${productEnum}`)
})

const productValue: Product = 22
const productName: string = Product[productValue]
console.log(`Value: ${productValue}, Name: ${productName}`)

enum City {
    London = "London",
    Paris = "Paris",
    NY = "New York",
    Gorgonzola = "Gorgonzola"
}
console.log(`City: ${City.NY}`)
console.log(`City: ${City.Gorgonzola}`)
