function calculateTax(amount: number): number {
    return amount * 1.2
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`)
}

const prices = [100, 75, 42]
const names = ["Hat", "Gloves", "Umbrella"]

prices.forEach((price: number, index: number) => {
    writePrice(names[index], calculateTax(price))
})
