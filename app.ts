// Union Types: number | string
// Literal Types: "as-number" | "as-text "

type Combinable = number | string; // Custom type (Type Alias)
type ConversionDescriptor = "as-number" | "as-text"; // Custom type (Type Alias)

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
    let result;
    if (
        (typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number"
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(25, 30, "as-number");
console.log(combinedAges);

const combinedAgesString = combine("25", "30", "as-text");
console.log(combinedAgesString);

const combinedNames = combine("Rio", "Edwards", "as-text");
console.log(combinedNames);
