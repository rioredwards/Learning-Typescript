/* Generics */

// Generics: Allow for flexibility and type safety
// They allow you to work with different types
// They can be functions/objects/etc...
// When you use a generic, you can specify the type
// Note: They can seem similar to union types, but they have a key difference
// Generics "Lock in" the type that is originally specified, whereas union types can change

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

// Using the keyof constraint (this ensures that the key exists in the object)
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Rio" }, "name");

/* Generic classes */

// This class uses a generic type
// We use a generic to constrain the type of data that can be stored in the class
// Because the method "removeItem" only works on primitive types
class dataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new dataStorage<string>();
textStorage.addItem("Rio");
textStorage.addItem("Makaela");
textStorage.removeItem("Rio");
console.log(textStorage.getItems());

/* Generic Utility Types */

// Utility types are built into typescript
// They allow for some convenient type manipulation in generics

// Partial: Allows you to make all properties of an object optional
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// This function returns a CourseGoal object
// However we may want to construct the CourseGoal object in stages
// Therefore we can use the Partial utility type to make all properties optional
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; // Partial utility type
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal; // All properties are now added, so we can cast to CourseGoal
}

// Readonly: Makes all properties of an object readonly
const names: Readonly<string[]> = ["Rio", "Makaela"];
// names.push("Rio Jr."); // This will throw an error
// names.pop(); // This will throw an error
