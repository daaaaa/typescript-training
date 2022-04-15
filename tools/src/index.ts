function printMessage(msg: string): void {
    console.log(`Message: ${ msg }`)
}

let message = "Hello, TypeScript"

printMessage(message)
printMessage("It is sunny today")

let data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach((val, key) => console.log(`${key} lives in ${val}`));