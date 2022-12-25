// "unknown" type: better than "any" bc a check is required before assigning it to another variable
var userInput;
var userName;
userInput = 5;
userInput = "Rio";
if (typeof userInput === "string") {
    // Check (Typescript Compiler lets this through)
    userName = userInput;
}
function generateError(message, code) {
    console.log("hello");
    throw { message: message, errorCode: code };
}
generateError("This is an error!", 500);
