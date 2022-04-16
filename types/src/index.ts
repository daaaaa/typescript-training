function check(expression: boolean): asserts expression {
    if (!expression) {
        throw new Error("Expression is false")
    }
}

function calculateTax(amount: number | null): number {
    check(typeof amount == "number")
    return amount * 1.2
}

function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`)
}

const taxValue: number = calculateTax(100)
writeValue("Tax value", taxValue)