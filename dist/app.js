"use strict";
/* Decorators */
// NOTE: enable experimentalDecorators in tsconfig.json
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// A form of Meta programming
// Decorators are functions that can be attached to classes, methods, properties, and parameters.
// They run when the code is compiled, not when it is executed.
// They don't affect the final code, but can help with debugging and logging.
// This will run when the code is compiled, so it will log the constructor of the Person class.
function Logger(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
let Person1 = class Person1 {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
Person1 = __decorate([
    Logger // This is a decorator. It is attached to the class and calls the logger function.
], Person1);
/* Decorator Factory */
// This is a decorator factory. It is a function that returns a decorator.
// This allows the decorator to be configured with parameters.
// In this example, the decorator takes a string as an argument.
// THis function returns a decorator.
function loggerFactory(logString) {
    // This is the decorator.
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Person2 = class Person2 {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
Person2 = __decorate([
    loggerFactory("LOGGING - PERSON")
], Person2);
/* Decorator with template */
// This decorator will render a template to the DOM.
// Using this, we can visualize properties of the person class in the DOM.
// This is actually a pattern used in Angular.
function withTemplate1(template, hookId) {
    console.log("Template Factory");
    return function (personConstructor) {
        console.log("Rendering template");
        // This constructor is passed in as an argument.
        // We can use it in the decorator to create a new instance of the class.
        const person = new personConstructor();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = person.name;
        }
    };
}
// This is a decorator that attaches to withTemplate.
// It takes in arguments that are passed to withTemplate.
// The function finds the hookId element in the DOM and renders the h1 tag with the name property
let Person3 = class Person3 {
    constructor() {
        this.name = "Rio";
        console.log("Creating person object...");
    }
};
Person3 = __decorate([
    loggerFactory("LOGGING"),
    withTemplate1("<h1>My Person Object</h1>", "app")
], Person3);
/* Property, Accessor, Method and Parameter Decorators */
// This is a property decorator.
// It takes 2 arguments: the target object and the name of the property.
function Log(target, propertyName) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}
// This is an accessor decorator.
// Accessors are setters and getters.
function Log2(target, name, descriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// This is a method decorator.
// It takes 3 arguments: the target object, the name of the method, and the descriptor.
function Log3(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// This is a parameter decorator.
// It takes 3 arguments: the target object, the name of the method, and the position of the parameter.
function Log4(target, name, position) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - should be positive!");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
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
function withTemplate2(template, hookId) {
    console.log("Template Factory");
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super(); // Super calls the constructor of the original class. (needed to extend the class)
                console.log("Rendering template");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
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
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
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
    constructor() {
        this.message = "This works!";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector("button");
// A problem arises when we want the "this" keyword to refer to the class instance.
// Because in the event listener, "this" refers to the button element.
// We could use bind to fix this:
// button.addEventListener("click", p.showMessage.bind(p));
// but we can also use a decorator to autobind "this" to the class instance.
button.addEventListener("click", p.showMessage);
const registeredValidators = {};
function Required(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "required",
        ] });
}
function PositiveNumber(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "positive",
        ] });
}
function validate(obj) {
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
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("Invalid input, please try again!");
        return;
    }
    console.log(createdCourse);
});
//# sourceMappingURL=app.js.map