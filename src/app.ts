/* Interface */

// Interfaces are like blueprints for objects
// Similar to abstract classes, but they can't be instantiated
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Person;

user1 = new Person("Rio");
user1.greet("Hi there - I am");
