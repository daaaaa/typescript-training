function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
const prices = [100, 75, 42];
const names = ["Hat", "Gloves", "Umbrella"];
prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});
