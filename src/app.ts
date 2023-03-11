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

/* Type guards */

// Type guards are used to check the type of a variable.
// Three types of type guards:
// typeof: useful for primitives
// in: useful for objects
// instanceof: useful for objects

// NOTE typeof is useful for primitives, but not for objects.
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type unknownEmployee = Employee | Admin;

// in is useful for objects.
function printEmployeeInformation(emp: unknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Max", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

// instanceof is useful for objects .
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
