import { sum } from "./calc"

function printMessage(msg: string): void {
    console.log(`Message: ${ msg }`)
}

let message = "Hello, TypeScript"

printMessage(message)
printMessage("It is sunny today")

debugger

let total = sum(100, 200, 300);
console.log(`Total: ${total}`);