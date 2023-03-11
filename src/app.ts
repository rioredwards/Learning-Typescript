/* Function Overloads */
type Combinable = number | string;

// Function overloads: allow us to define the possible types of a function
// This is important for functions that could return different types
// Otherwise TypeScript blocks from using type-specific methods from values returned

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable): Combinable {
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
