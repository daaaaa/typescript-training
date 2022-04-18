function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
const hat = ["Hat", 100];
const gloves = ["Gloves", 75];
const products = [hat, gloves];
const tupleUnion = [true, false, hat, ...products];
tupleUnion.forEach((elem) => {
    if (elem instanceof Array) {
        const [str, num] = elem;
        console.log(`String: ${str}`);
        console.log(`Number: ${num.toFixed(2)}`);
    }
    else {
        console.log(`Boolean Value: ${elem}`);
    }
});
