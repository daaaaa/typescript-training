function calculateTax(amount) {
    if (amount !== null) {
        return amount * 1.2;
    }
    return null;
}
function writeValue(label, value) {
    console.log(`${label}: ${value}`);
}
const taxValue = calculateTax(100);
if (typeof taxValue === "number") {
    writeValue("Tax value", taxValue);
}
