import { sum } from "./calc"

function printMessage(msg: string): void {
    console.log(`Message: ${ msg }`)
}

const message = "Hello, TypeScript"

printMessage(message)
printMessage("It is sunny today")

const total = sum(100, 200, 300, 400);
console.log(`Total: ${total}`);