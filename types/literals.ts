/* Literal Types */

// Literal types are types that are defined by a literal value
// ex: foo: 1 is a literal type
// resultConversion is a literal union type here
// Literal union types are useful when you want to specify allowed values for a type

function combine(
  n1: number | string,
  n2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result: number | string;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
