function calculateTax(amount: number): number {
    return amount * 1.2
}

const price: number = 12
console.log(`No TAX price: ${price} - TAX Price: ${calculateTax(price)}`)

const stringPrice: string = "12"
console.log(`No TAX price: ${stringPrice} - TAX stringPrice: ${calculateTax(stringPrice)}`)