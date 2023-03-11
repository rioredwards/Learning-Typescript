/* Intersection Types  */

// Intersection types combine multiple types into one type.
// Similar to inheritance.
// Can be used with types and interfaces.

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// This is an intersection modifier. It combines properties.
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

// The intersection operator can also be used to combine union types.
// This type will get the common properties of both types... ie... number
type Universal = Combinable & Numeric;
