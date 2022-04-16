function calculateTax(amount: number, format: boolean): number | string {
    const taxedAmount: number = amount * 1.2
    return format ? "$" + taxedAmount.toFixed(2) : taxedAmount
}

const price = 100
const taxNumber = calculateTax(price, false)
const taxFormat = calculateTax(price, true)

console.log(taxNumber)
console.log(taxFormat)