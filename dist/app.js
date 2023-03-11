"use strict";
/* Intersection Types  */
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
/* Type guards */
// Type guards are used to check the type of a variable.
// Three types of type guards:
// typeof: useful for primitives
// in: useful for objects
// instanceof: useful for objects
// NOTE typeof is useful for primitives, but not for objects.
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
// in is useful for objects.
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log("Loading cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
// instanceof is useful for objects .
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
//# sourceMappingURL=app.js.map