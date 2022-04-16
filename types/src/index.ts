function calculateTax(amount: number): any {
    return (amount * 1.2).toFixed(2)
}

const price: number = 12
console.log(`No TAX price: ${price} - TAX Price: ${calculateTax(price)}`)

// const stringPrice = "12"
// console.log(`No TAX price: ${stringPrice} - TAX stringPrice: ${calculateTax(stringPrice)}`)

const halfTotalPrice = calculateTax(price) / 2

console.log(`The halved price is ${halfTotalPrice}`);
