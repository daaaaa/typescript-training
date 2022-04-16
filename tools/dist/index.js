"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
function printMessage(msg) {
    console.log(`Message: ${msg}`);
}
let message = "Hello, TypeScript";
printMessage(message);
printMessage("It is sunny today");
debugger;
let total = calc_1.sum(100, 200, 300, 400);
console.log(`Total: ${total}`);
//# sourceMappingURL=index.js.map