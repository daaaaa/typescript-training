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

type numVals = 1 | 2 | 3 | 4

function getRandomValue(): numVals {
    return Math.floor(Math.random() * 4) + 1 as numVals
}

function getMixedValue(input: 1): 1
function getMixedValue(input: 2 | 3): "Hello" | true
function getMixedValue(input: 4): City.London
function getMixedValue(input: number): 1 | "Hello" | true | City.London {
    switch (input) {
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
        default:
            return City.London
    }
}

const first = getMixedValue(1)
const second = getMixedValue(2)
const third = getMixedValue(3)
console.log(first, second, third)

type Cities = "London" | "Paris" | "Chicago"
type CityResponse = `City: ${Cities}`
function getCityString(city: Cities): CityResponse {
    return `City: ${city}` as CityResponse
}

let stringCity = getCityString("London")
console.log(stringCity)