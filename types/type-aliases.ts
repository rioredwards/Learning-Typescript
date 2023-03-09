/* Type alias */

// Type aliases are used to give a name to a type.
// They are useful for readability and conciseness.

type Combinable = number | string; // Type alias
type ConversionDescriptor = "as-number" | "as-text"; // Type alias
type User = { name: string; age: number }; // Type alias

// These two are the same type:
const person1: number | string = 30;
const person2: Combinable = "Max";

// This variable can only be assigned to "as-number" or "as-text"
const foo: ConversionDescriptor = "as-number";

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
