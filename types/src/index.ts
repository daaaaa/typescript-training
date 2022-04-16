function calculateTax(amount, discount) {
    return (amount * 1.2) - discount
}

const taxValue = calculateTax(100, 0)
console.log(`Total Amount: ${taxValue}`)

const taxValueTwo = calculateTax(199)