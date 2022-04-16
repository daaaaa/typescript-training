function calculateTax(amount: number | null): number | null {
    if (amount !== null) {
        return amount * 1.2
    }
    return null
}

function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`)
}

const taxValue: number | null = calculateTax(100)
if (typeof taxValue === "number") {
    writeValue("Tax value", taxValue)
}