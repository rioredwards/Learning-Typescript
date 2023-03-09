/* Classes */
class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log("Department: " + this.name + " (" + this.id + ")");
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// Inheritance: This class automatically gets all the properties and methods of the Department class
// and we can add more properties and methods to extend it
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    // Super is a keyword that acts as the constructor of the parent class
    super(id, "IT");
  }
}

const dev = new ITDepartment("1", ["Rio"]);

dev.addEmployee("Max");
dev.describe();
dev.printEmployeeInformation();
console.log(dev);

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
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
