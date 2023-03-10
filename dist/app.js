"use strict";
/* Abstract Classes */
// Abstract classes are used to create a blueprint for other classes to extend
// Abstract classes cannot be instantiated directly
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    describe() {
        console.log("Accounting Department");
    }
}
const accounting = new AccountingDepartment("2", []);
accounting.describe();
//# sourceMappingURL=app.js.map