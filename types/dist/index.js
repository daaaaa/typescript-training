function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
const hat = ["Hat", 100];
const gloves = ["Gloves", 75];
writePrice(hat[0], calculateTax(hat[1]));
writePrice(gloves[0], calculateTax(gloves[1]));
