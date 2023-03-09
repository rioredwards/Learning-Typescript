/* Unknown */

// Unknown is similar to any, but more strict and therefore safer.
// Unlike any, unknown requires a type check before it can be used.

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  // Type is string, so we can assign it to userName
  console.log(userInput);
  userName = userInput;
}
