function calculateTax(amount): any {
    return "$" + (amount * 1.2).toFixed(2)
}

const price: number = 12
console.log(`No TAX price: ${price} - TAX Price: ${calculateTax(price)}`)

// const stringPrice = "12"
// console.log(`No TAX price: ${stringPrice} - TAX stringPrice: ${calculateTax(stringPrice)}`)

const halfTotalPrice = calculateTax(price) / 2

console.log(`The halved price is ${halfTotalPrice}`);

// const newResult: any = calculateTax(200)
// const myNumber: number = newResult
// console.log(`Number value: ${myNumber.toFixed(2)}`)

let personVal = calculateTax("Bob");
console.log(`Name: ${personVal}`);