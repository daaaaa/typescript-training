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
const taxNumberTypeOf = calculateTax(100, false);
if (typeof taxNumberTypeOf === "number") {
    console.log(taxNumberTypeOf.toFixed(20));
}
const taxFormatTypeOf = calculateTax(100, false);
switch (typeof taxFormatTypeOf) {
    case "number":
        console.log(`Number Value: ${taxFormatTypeOf.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxFormatTypeOf.charAt(0)}`);
        break;
    default:
        const value = taxFormatTypeOf;
        console.log(`Unexpected type for value: ${value}`);
}
