function calculateTax(amount: number): number {
    return amount * 1.2
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`)
}

const hat: [string, number] = ["Hat", 100]
const gloves: [string, number] = ["Gloves", 75]

writePrice(hat[0], calculateTax(hat[1]))
writePrice(gloves[0], calculateTax(gloves[1]))