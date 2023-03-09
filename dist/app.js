"use strict";
/* Classes */
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //   id: string; // Property
        //   name: string; // Property
        this.employees = []; // Private Property
        // Alternative to declaring properties above
        // Constructor
        // this.name = n;
        // this.id = id;
    }
    describe() {
        // Method
        // Note: passing in "this" tells TypeScript that this method should only be called on a Department object
        console.log("Department: " + this.name + " (" + this.id + ")");
    }
    addEmployee(employee) {
        // Method
        // this.id = "2"; // Error: Cannot assign to 'id' because it is a read-only property.
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        // Method
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// Instantiate a new object
const accounting = new Department("1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
// accounting.employees[2] = "Anna"; // Error: Property 'employees' is private and only accessible within class 'Department'.
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map