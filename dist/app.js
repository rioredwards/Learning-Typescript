"use strict";
/* Classes */
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // Protected: private but accessible in inherited classes
        this.employees = [];
    }
    // Static method
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
Department.fiscalYear = 2020;
const employee1 = Department.createEmployee("Max");
console.log(Department.fiscalYear);
console.log(employee1);
//# sourceMappingURL=app.js.map