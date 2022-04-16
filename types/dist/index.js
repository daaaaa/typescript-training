function calculateTax(amount, format) {
    const taxedAmount = amount * 1.2;
    return format ? "$" + taxedAmount.toFixed(2) : taxedAmount;
}
const price = 100;
const taxNumber = calculateTax(price, false);
const taxFormat = calculateTax(price, true);
const taxBoolean = calculateTax(price, false);
console.log(taxNumber.toString);
console.log(taxNumber.toFixed(2));
console.log(taxFormat.charAt(0));
console.log(taxBoolean);
