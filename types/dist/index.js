function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
const hat = ["Hat", 100, 10, 1.20, 3, 0.95];
const gloves = ["Gloves", 75, 10];
const items = [hat, gloves];
items.forEach((tuple) => {
    let [name, price, taxRate, ...coupons] = tuple;
    if (taxRate !== undefined) {
        price += price * (taxRate / 100);
    }
    coupons.forEach(c => price -= c);
    writePrice(name, price);
});
