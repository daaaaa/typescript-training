function check(val: any): asserts val is number {
    if (typeof val != "number") {
        throw new Error("Not a number")
    }
}

function calculateTax(amount: number | null): number {
    check(amount)
    return amount * 1.2
}

function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`)
}

const taxValue: number = calculateTax(100)
writeValue("Tax value", taxValue)