"use strict";
/* Singleton Classes */
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
}
// Singleton Class
// This class can only be instantiated once
// The constructor is private
// The static method getInstance() is used to create the instance
// The static property instance is used to store the instance
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("2", []);
        return this.instance;
    }
    describe() {
        console.log("Accounting Department");
    }
}
const accounting = AccountingDepartment.getInstance();
accounting.describe();
//# sourceMappingURL=app.js.map