"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.costFormatter = exports.sizeFormatter = exports.writeMessage = void 0;
function writeMessage(message) {
    console.log(message);
}
exports.writeMessage = writeMessage;
function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items`);
}
exports.sizeFormatter = sizeFormatter;
function costFormatter(thing, cost) {
    if (typeof cost === 'number') {
        writeMessage(`The ${thing} costs $${cost.toFixed(2)}`);
    }
    else {
        writeMessage(`The ${thing} costs $${cost}`);
    }
}
exports.costFormatter = costFormatter;
