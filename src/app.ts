/* Generics */

// Generics: can work with different types
// They can be functions/objects/etc...
// When you use a generic, you can specify the type

// Arrays are generic types, so these two are equivalent
const arr1: any[] = [1, 2, 3];
const arr2: Array<any> = [1, 2, 3];

// Here we specify the type of array to be a string
const strArray: Array<string> = ["a", "b", "c"];
// Here we specify the type of array to be a number
const numArray: Array<number> = [1, 2, 3];

// Promise is a generic type
// Here we specify the return type of the promise to be a string
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

// Therefore we can use string methods on the returned data
promise.then((data) => {
  data.split(" ");
});

/* Creating our own generics */

// This is a function using a generic type
// This is more specific than setting the types of the parameters to any or object
// The return type is the intersection of the two objects
// We added constraints to the parameter types... they must be objects
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

// Typescript is able to infer the type of the parameters and therefore the return type
const mergedObj = merge({ name: "Rio" }, { age: 25 });

// This interface is used to constrain the type of the element passed into countAndDescribe
interface Lengthy {
  length: number;
}

// This function uses a generic type
// The parameter type is constrained by the Lengthy interface
// This asserts that any parameter passed into this function must have a length property
// We use generics to say "I don't care what the type is, but it must have a length property"
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sports", "Cooking"]));
