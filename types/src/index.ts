function calculateTax(amount: number, format: boolean): number | string | null {
    if (amount === 0) {
        return null
    }
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

let taxFormatTypeOf!: string | number | null
eval("taxFormatTypeOf = calculateTax(10, false)")

if (taxFormatTypeOf !== null) {
    const nonNulltaxFormatTypeOf: string | number = taxFormatTypeOf
    switch (typeof taxFormatTypeOf) {
        case "number":
            console.log(`Number Value: ${taxFormatTypeOf.toFixed(2)}`)
            break;
        case "string":
            console.log(`String Value: ${taxFormatTypeOf.charAt(0)}`)
            break
    }
} else {
    console.log("Value is not a string or a number")
}


const newResult: unknown = calculateTax(300, false)
const myNumber: number = newResult as number
console.log(`myNumber value: ${myNumber.toFixed(2)}`)