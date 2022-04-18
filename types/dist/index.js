function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
const hat = ["Hat", 100];
const gloves = ["Gloves", 75];
hat.forEach((h) => {
    if (typeof h === "string") {
        console.log(`String: ${h}`);
    }
    else {
        console.log(`Number: ${h.toFixed(2)}`);
    }
});
let [glovesName, glovesPrice] = gloves;
writePrice(glovesName, calculateTax(glovesPrice));
