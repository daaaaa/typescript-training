function calculateTax(amount: number): number {
    return amount * 1.2
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`)
}

enum Product { Hat, Gloves, Umbrella }

// let products: [Product, number][] = [[Product.Hat, 100], [Product.Gloves, 75]]

[Product.Hat, Product.Gloves, Product.Umbrella].forEach((productEnum) => {
    console.log(`Enum value: ${productEnum}`)
})

const productValue: Product = 0
const productName: string = Product[productValue]
console.log(`Value: ${productValue}, Name: ${productName}`)
