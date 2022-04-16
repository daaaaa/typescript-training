function calculateTax(amount, discount) {
    return (amount * 1.2) - discount || 0;
}
const taxValue = calculateTax(100, 0);
console.log(`Total Amount: ${taxValue}`);
const taxValueTwo = calculateTax(199);
console.log(`Total Amount two: ${taxValueTwo}`);
// const taxValueThree = calculateTax(199, 10, 11)
