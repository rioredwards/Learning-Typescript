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
function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

// Typescript is able to infer the type of the parameters and therefore the return type
const mergedObj = merge({ name: "Rio" }, { age: 25 });
