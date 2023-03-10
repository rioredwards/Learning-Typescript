/* Classes */
class Department {
  static fiscalYear = 2020;
  // Protected: private but accessible in inherited classes
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  // Static method
  static createEmployee(name: string) {
    return { name: name };
  }

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

const employee1 = Department.createEmployee("Max");
console.log(Department.fiscalYear);
console.log(employee1);
