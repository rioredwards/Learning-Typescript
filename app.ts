/* Functions */

// Specifying return type
// Okay to leave this out in many cases because it can be inferred
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// Void return type
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));
