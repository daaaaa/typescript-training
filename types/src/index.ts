function calculateTax(amount: number, format: boolean): number | string {
    const taxedAmount: number = amount * 1.2
    return format ? "$" + taxedAmount.toFixed(2) : taxedAmount
}

const price = 100
const taxNumber: number = calculateTax(price, false) as number
const taxFormat: string = <string> calculateTax(price, true)
const taxBoolean: boolean = calculateTax(price, false) as any as boolean

console.log(taxNumber.toString)
console.log(taxNumber.toFixed(2))
console.log(taxFormat.charAt(0))
console.log(taxBoolean)

const taxNumberTypeOf = calculateTax(100, false)
if (typeof taxNumberTypeOf === "number") {
    console.log(taxNumberTypeOf.toFixed(20))
}

const taxFormatTypeOf = calculateTax(100, false)
switch (typeof taxFormatTypeOf) {
    case "number":
        console.log(`Number Value: ${taxFormatTypeOf.toFixed(2)}`)
        break;
    case "string":
        console.log(`String Value: ${taxFormatTypeOf.charAt(0)}`)
        break
    default:
        const value: never = taxFormatTypeOf;
        console.log(`Unexpected type for value: ${value}`);
}

const newResult: unknown = calculateTax(300, false)
const myNumber: number = newResult as number
console.log(`myNumber value: ${myNumber.toFixed(2)}`)