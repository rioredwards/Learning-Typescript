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
