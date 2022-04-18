function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
var Product;
(function (Product) {
    Product[Product["Hat"] = 0] = "Hat";
    Product[Product["Gloves"] = 20] = "Gloves";
    Product[Product["Umbrella"] = 21] = "Umbrella";
})(Product || (Product = {}));
[Product.Hat, Product.Gloves, Product.Umbrella].forEach((productEnum) => {
    console.log(`Enum value: ${productEnum}`);
});
const productValue = 22;
const productName = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}`);
var City;
(function (City) {
    City["London"] = "London";
    City["Paris"] = "Paris";
    City["NY"] = "New York";
    City["Gorgonzola"] = "Gorgonzola";
})(City || (City = {}));
console.log(`City: ${City.NY}`);
console.log(`City: ${City.Gorgonzola}`);
