function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
var Product;
(function (Product) {
    Product[Product["Hat"] = 0] = "Hat";
    Product[Product["Gloves"] = 1] = "Gloves";
    Product[Product["Umbrella"] = 2] = "Umbrella";
})(Product || (Product = {}));
let products = [[Product.Hat, 100], [Product.Gloves, 75]];
products.forEach((tuple) => {
    let [productType, price] = tuple;
    switch (productType) {
        case Product.Hat:
            writePrice("Hat", calculateTax(price));
            break;
        case Product.Gloves:
            writePrice("Gloves", calculateTax(price));
            break;
        case Product.Umbrella:
            writePrice("Umbrella", calculateTax(price));
            break;
    }
});
