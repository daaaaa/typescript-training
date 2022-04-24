// @ts-nocheck

function writeMessage(message) {
    console.log(message);
}

export function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items`);
}

/**
 * Format something that has a money value
 * @param { string } thing - the name of the item
 * @param { number } cost - the value associated with the item
 */
export function costFormatter(thing, cost) {
    writeMessage(`The ${thing} costs $${cost.toFixed(2)} items`, true);
}
