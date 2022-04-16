function calculateTax(amount: number): number {
    return amount * 1.2
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`)
}

const prices = []
prices.push(...[100, 75, 42, "20"])
const names = ["Hat", "Gloves", "Umbrella", "Sunglasses"]

prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price))
})
