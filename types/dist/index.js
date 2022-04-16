function calculateTax(amount) {
    return amount * 1.2;
}
const price = 12;
console.log(`No TAX price: ${price} - TAX Price: ${calculateTax(price)}`);
const stringPrice = "12";
console.log(`No TAX price: ${stringPrice} - TAX stringPrice: ${calculateTax(stringPrice)}`);
