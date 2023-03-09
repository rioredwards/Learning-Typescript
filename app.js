/* Literal Types */
// Literal types are types that are defined by a literal value
// ex: foo: 1 is a literal type
// resultConversion is a literal union type here
// Literal union types are useful when you want to specify allowed values for a type
function combine(n1, n2, resultConversion) {
    var result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultConversion === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedStringAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
