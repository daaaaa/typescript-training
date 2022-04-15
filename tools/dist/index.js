function printMessage(msg) {
    console.log("Message: ".concat(msg));
}
var message = "Hello, TypeScript";
printMessage(message);
printMessage("It is sunny today");
var data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach(function (val, key) { return console.log("".concat(key, " lives in ").concat(val)); });
