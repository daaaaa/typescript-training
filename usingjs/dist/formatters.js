"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.costFormatter = exports.sizeFormatter = void 0;
function writeMessage(message) {
    console.log(message);
}
function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items`);
}
exports.sizeFormatter = sizeFormatter;
function costFormatter(thing, cost) {
    writeMessage(`The ${thing} costs $${cost.toFixed(2)} items`, true);
}
exports.costFormatter = costFormatter;
