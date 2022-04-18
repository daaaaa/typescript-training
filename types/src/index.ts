function calculateTax(amount: number): number {
    return amount * 1.2
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`)
}

enum Product { Hat, Gloves = 20, Umbrella }

[Product.Hat, Product.Gloves, Product.Umbrella].forEach((productEnum) => {
    console.log(`Enum value: ${productEnum}`)
})

const productValue: Product = Product.Hat
if (typeof productValue === "number") {
    console.log("productValue is a number")
}

const unionValue: number | Product = Product.Hat
if (typeof unionValue === "number") {
    console.log("unionValue is a number")
}

enum City {
    London = "London",
    Paris = "Paris",
    NY = "New York",
    Gorgonzola = "Gorgonzola"
}
console.log(`City: ${City.NY}`)
console.log(`City: ${City.Gorgonzola}`)

const enum Colors { Red, Green, Blue }
console.log(`Color value: ${Colors.Red}`)
// console.log(`Color value: ${Colors[1]}`)

const restrictedValue: 1 | 2 | 3 = 3
console.log(`Restricted value: ${restrictedValue}`)

// const restrictedValueNotAllowed: 1 | 2 | 3 = 100

function calculatePrice(quantity: 1 | 2, price: number): number {
    return quantity * price
}

const total = calculatePrice(2, 19.99)
console.log(`Price: ${total}`)

function getRandomValue(): 1 | 2 | 3 | 4 {
    return Math.floor(Math.random() * 4) + 1 as 1 | 2 | 3 | 4
}

function getMixedValue(): 1 | "Hello" | true | City.London {
    switch (getRandomValue()) {
        case 1:
            return 1
            break;
        case 2:
            return "Hello"
            break;
        case 3:
            return true
            break;
        case 4:
            return City.London
            break;
    }
}

console.log(`Random value: ${getMixedValue()}`)