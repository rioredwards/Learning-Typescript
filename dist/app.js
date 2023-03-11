"use strict";
var _a;
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
const maybeJob = (_a = user.job) === null || _a === void 0 ? void 0 : _a.title;
/* Nullish Coalescing */
// Nullish Coalescing: check if a value is null or undefined
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
//# sourceMappingURL=app.js.map