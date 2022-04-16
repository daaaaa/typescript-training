function calculateTax(amount: number, format: boolean): number | string {
    const taxedAmount: number = amount * 1.2
    return format ? "$" + taxedAmount.toFixed(2) : taxedAmount
}

const price = 100
const taxNumber: string | number = calculateTax(price, false)
const taxFormat: number | string = calculateTax(price, true)

console.log(taxNumber.toString)
console.log(taxNumber.toFixed(2))
console.log(taxFormat.charAt(0))