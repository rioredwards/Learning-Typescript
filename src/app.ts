/* Type casting */

// Type casting: tell TypeScript that we know what type something is
// 2 syntaxes for type casting:

// angle bracket syntax: <HTMLInputElement>
const paragraphElement = <HTMLParagraphElement>(
  document.getElementById("paragraph")
);

// "as" syntax: as HTMLInputElement
// (preferred because it doesn't conflict with JSX)
// NOTE the ! operator: means this element will not be null
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hi there!";

// How to check if an element exists before type casting
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}

/* Index properties */

// Index properties: allow us to create objects with dynamic properties
// e.g. we don't know the name of the properties ahead of time

// We might want to create an object that stores error messages
// But we want it to be flexible.
// e.g. It might not have an email property
interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character' }
  // Index property!
  // key: string, value: string
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};
