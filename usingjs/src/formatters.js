// @ts-nocheck

function writeMessage(message) {
    console.log(message);
}

export function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items`);
}

export function costFormatter(thing, cost) {
    writeMessage(`The ${thing} costs $${cost.toFixed(2)} items`, true);
}
