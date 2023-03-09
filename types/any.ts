/* Any */

// The any type takes away the type checking of the variable.
// It is rarely used in TypeScript, but it is useful when you are migrating JavaScript code to TypeScript.
// Avoid it if you can.

// Example
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
