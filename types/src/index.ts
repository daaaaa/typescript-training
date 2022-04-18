function calculateTax(amount: number): number {
    return amount * 1.2
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`)
}

const hat: [string, number] = ["Hat", 100]
const gloves: [string, number] = ["Gloves", 75]

hat.forEach((h) => {
    if (typeof h === "string") {
        console.log(`String: ${h}`)
    } else {
        console.log(`Number: ${h.toFixed(2)}`)
    }
})

let [glovesName, glovesPrice] = gloves
writePrice(glovesName, calculateTax(glovesPrice))