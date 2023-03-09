/* Tuples */
var person = [10, "user"];
person[1] = "admin";
// Errors:
// person[1] = 5; // Error: Tuple must have string at index 1
// person[2] = "client"; // Error: Tuple must have length of 2
person.push("client"); // GOTCHA! Not an error, but not a good idea
console.log(person);
