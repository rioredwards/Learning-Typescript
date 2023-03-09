"use strict";
/* Classes */
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // Protected: private but accessible in inherited classes
        this.employees = [];
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
// Inheritance: This class automatically gets all the properties and methods of the Department class
// and we can add more properties and methods to extend it
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    // Overriding a method
    addEmployee(employee) {
        if (employee === "Max") {
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDepartment("2", []);
accounting.addReport("Something went wrong...");
accounting.printReports();
console.log(accounting);
//# sourceMappingURL=app.js.map