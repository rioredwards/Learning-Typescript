// Union Types: number | string
// Literal Types: "as-number" | "as-text "
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(25, 30, "as-number");
console.log(combinedAges);
var combinedAgesString = combine("25", "30", "as-text");
console.log(combinedAgesString);
var combinedNames = combine("Rio", "Edwards", "as-text");
console.log(combinedNames);
