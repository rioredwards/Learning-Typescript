/* Functions as types */

// Function types are used to describe the shape of a function
// They are useful when we want to pass functions as arguments to other functions
function add(n1: number, n2: number): number {
  return n1 + n2;
}

let copyAdd1: Function; // Function type (generic type, less type safe)
// OR
let copyAdd2: (a: number, b: number) => number; // Function type (specifying the arguments and return type)

copyAdd2 = add; // Only allowed if the function types match

console.log(copyAdd2(5, 12));
