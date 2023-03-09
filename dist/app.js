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
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
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
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDepartment("2", []);
accounting.addReport("Something went wrong...");
accounting.printReports();
console.log(accounting);
accounting.mostRecentReport = "Year end report";
console.log(accounting.mostRecentReport);
//# sourceMappingURL=app.js.map