/* Decorators */
// NOTE: enable experimentalDecorators in tsconfig.json

// A form of Meta programming
// Decorators are functions that can be attached to classes, methods, properties, and parameters.
// They run when the code is compiled, not when it is executed.
// They don't affect the final code, but can help with debugging and logging.

// This will run when the code is compiled, so it will log the constructor of the Person class.
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger // This is a decorator. It is attached to the class and calls the logger function.
class Person1 {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

/* Decorator Factory */

// This is a decorator factory. It is a function that returns a decorator.
// This allows the decorator to be configured with parameters.
// In this example, the decorator takes a string as an argument.

// THis function returns a decorator.
function loggerFactory(logString: string) {
  // This is the decorator.
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@loggerFactory("LOGGING - PERSON")
class Person2 {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

/* Decorator with template */

// This decorator will render a template to the DOM.
// Using this, we can visualize properties of the person class in the DOM.
// This is actually a pattern used in Angular.
function withTemplate1(template: string, hookId: string) {
  console.log("Template Factory");

  return function (personConstructor: any) {
    console.log("Rendering template");
    // This constructor is passed in as an argument.
    // We can use it in the decorator to create a new instance of the class.
    const person = new personConstructor();
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = person.name;
    }
  };
}

// This is a decorator that attaches to withTemplate.
// It takes in arguments that are passed to withTemplate.
// The function finds the hookId element in the DOM and renders the h1 tag with the name property
@loggerFactory("LOGGING")
@withTemplate1("<h1>My Person Object</h1>", "app")
class Person3 {
  name = "Rio";

  constructor() {
    console.log("Creating person object...");
  }
}

/* Property, Accessor, Method and Parameter Decorators */

// This is a property decorator.
// It takes 2 arguments: the target object and the name of the property.
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

// This is an accessor decorator.
// Accessors are setters and getters.
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// This is a method decorator.
// It takes 3 arguments: the target object, the name of the method, and the descriptor.
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// This is a parameter decorator.
// It takes 3 arguments: the target object, the name of the method, and the position of the parameter.
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

/* Returning and changing classes with a decorator */

// NOTE Classes === Constructor functions
// This means that a constructor has all that we need to create a new instance of a class.

// NOTE: If a class decorator returns a new constructor function, the original constructor function will be replaced with the new one.

// UPDATED: This now is called when a new instance of the class is created.
// decorator factory returns -> decorator returns -> class
// It doesn't render to the DOM anymore, but it does log to the console.
// The decorator factory takes in the template and hookId.
// The decorator takes in the original constructor.
// The decorator returns a new constructor. (extending the original class in this case)
// The syntax for defining the type of a constructor is: { new (...args: any[]): { name: string } }
// The type of the decorator is a generic function that takes in a constructor function.
// End result: modify the class that the decorator is attached to
function withTemplate2(template: string, hookId: string) {
  console.log("Template Factory");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super(); // Super calls the constructor of the original class. (needed to extend the class)
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

/* Other decorator return types */

// Class: returning a constructor function replaces the original constructor function
// Accessor (Getters/setters): returns are not ignored
// Method: returns are not
// Property: returns are ignored
// Parameter: returns are ignored

// NOTE Property descriptors are objects that describe the properties of a class.
// They exist in vanilla JS
const PropertyDescriptor = {
  configurable: true,
  enumerable: true,
  value: 10,
  writable: true,
};

// This is a decorator factory.
// it should be added to a method to autobind "this" in the method to refer to the instance of the class that called it.
// We can use the descriptor to get the original method and then return a new descriptor that has a getter that returns a bound function
function Autobind(
  _: any,
  _2: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
// A problem arises when we want the "this" keyword to refer to the class instance.
// Because in the event listener, "this" refers to the button element.
// We could use bind to fix this:
// button.addEventListener("click", p.showMessage.bind(p));
// but we can also use a decorator to autobind "this" to the class instance.
button.addEventListener("click", p.showMessage);

/* Validating with decorators */

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }
  console.log(createdCourse);
});
