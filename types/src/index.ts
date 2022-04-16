function calculateTax(amount: number | null, discount: number = 0, ...extraFees: number[]): number | undefined {
    if (amount === null) {
        return 
    }
    return (amount * 1.2) - discount + extraFees.reduce((tot, next) => tot + next, 0)
}

const taxValue = calculateTax(100, 0)
console.log(`Total Amount: ${taxValue}`)

const taxValueTwo = calculateTax(199)
console.log(`Total Amount two: ${taxValueTwo}`)

const taxValueThree = calculateTax(199, 10, 11)
console.log(`Total Amount three: ${taxValueThree}`)

const taxValueFour = calculateTax(199, 10, 1, 2, 3, 4, 5, 6)
console.log(`Total Amount four: ${taxValueFour}`)

const taxValueFive = calculateTax(null, 0)
console.log(`Total Amount five: ${taxValueFive}`)