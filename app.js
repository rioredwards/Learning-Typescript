/* Union Types */
// Union Types are used to combine two or more types
// This function can take numbers or strings as arguments
function combine(n1, n2) {
    if (typeof n1 === "number" && typeof n2 === "number") {
        // If both arguments are numbers, then return the sum
        return n1 + n2;
    }
    else {
        // If both arguments are strings, then return the concatenation
        return n1.toString() + n2.toString();
    }
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine("Max", "Anna");
console.log(combinedNames);
