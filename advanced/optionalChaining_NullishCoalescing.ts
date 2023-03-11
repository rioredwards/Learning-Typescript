/* Optional chaining */
// Optional chaining: check if a property exists before accessing it
const user = {
  name: "John",
  age: 30,
  job: {
    title: "Software Engineer",
    company: "Google",
  },
};

const maybeJob = user.job?.title;

/* Nullish Coalescing */

// Nullish Coalescing: check if a value is null or undefined
const userInput = null;
const storedData = userInput ?? "DEFAULT";
