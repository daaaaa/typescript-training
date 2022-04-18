function calculateTax(amount: number): number {
    return amount * 1.2
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`)
}

const hat: [string, number] = ["Hat", 100]
const gloves: [string, number] = ["Gloves", 75]

const products: [string, number][] = [hat, gloves]
const tupleUnion: ([string, number] | boolean)[] = [true, false, hat, ...products]

tupleUnion.forEach((elem) => {
    if (elem instanceof Array) {
        const [str, num] = elem
        console.log(`String: ${str}`)
        console.log(`Number: ${num.toFixed(2)}`)
    } else {
        console.log(`Boolean Value: ${elem}`)
    }
})
