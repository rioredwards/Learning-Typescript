"use strict";
/* Classes */
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // Protected: private but accessible in inherited classes
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log("Department: " + this.name + " (" + this.id + ")");
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const employee1 = Department.createEmployee("Max");
console.log(employee1);
//# sourceMappingURL=app.js.map