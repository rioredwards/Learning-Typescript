"use strict";
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
// In the case we add two strings, we know the result will be a string
// But the type is still Combinable, which means we can't use string methods
// We can use function overloads to fix this
const numResult = add(30, 26);
const stringResult = add("Rio", "Edwards");
// Now we can freely use string/number methods on the results
numResult.toFixed(2);
stringResult.split(" ");
//# sourceMappingURL=app.js.map