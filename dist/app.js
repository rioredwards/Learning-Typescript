"use strict";
/* Type casting */
// Type casting: tell TypeScript that we know what type something is
// 2 syntaxes for type casting:
// angle bracket syntax: <HTMLInputElement>
const paragraphElement = (document.getElementById("paragraph"));
// "as" syntax: as HTMLInputElement
// (preferred because it doesn't conflict with JSX)
// NOTE the ! operator: means this element will not be null
const userInputElement = document.getElementById("user-input");
userInputElement.value = "Hi there!";
// How to check if an element exists before type casting
if (userInputElement) {
    userInputElement.value = "Hi there!";
}
const errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character!",
};
//# sourceMappingURL=app.js.map