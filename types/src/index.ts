function calculateTax(amount: number): number {
    return amount * 1.2
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`)
}

const hat: [string, number, number?] = ["Hat", 100]
const gloves: [string, number, number?] = ["Gloves", 75, 10]
const items = [hat, gloves]

items.forEach((tuple) => {
    let [name, price, taxRate] = tuple

    if (taxRate !== undefined) {
        price += price * (taxRate / 100)
    }
    writePrice(name, price)
})
