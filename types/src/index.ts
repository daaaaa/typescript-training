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

const productValue: Product = Product.Hat
if (typeof productValue === "number") {
    console.log("productValue is a number")
}

const unionValue: number | Product = Product.Hat
if (typeof unionValue === "number") {
    console.log("unionValue is a number")
}

enum City {
    London = "London",
    Paris = "Paris",
    NY = "New York",
    Gorgonzola = "Gorgonzola"
}
console.log(`City: ${City.NY}`)
console.log(`City: ${City.Gorgonzola}`)

const enum Colors { Red, Green, Blue }
console.log(`Color value: ${Colors.Red}`)
console.log(`Color value: ${Colors[1]}`)
