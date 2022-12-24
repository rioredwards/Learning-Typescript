// typed functions (specify type of return value)
// functions as types (specify parameters types and return type)

// Returns a number
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// Returns nothing
function log(text: string): void {
    console.log(text);
}

// let combineValues: Function; // Generic type "Function"
let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(5, 10));

// Callback functions
function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
    const result = num1 + num2;
    cb(result);
}

addAndHandle(10, 10, (result) => {
    console.log(result);
});
