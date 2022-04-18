function calculateTax(amount: number): number {
    return amount * 1.2
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`)
}

enum Product { Hat, Gloves, Umbrella }

let products: [Product, number][] = [[Product.Hat, 100], [Product.Gloves, 75]]

products.forEach((tuple) => {
    let [productType, price] = tuple

    switch (productType) {
        case Product.Hat:
            writePrice("Hat", calculateTax(price))
            break;
    
        case Product.Gloves:
            writePrice("Gloves", calculateTax(price))
            break;
        
        case Product.Umbrella:
            writePrice("Umbrella", calculateTax(price))
            break;
    }
})
