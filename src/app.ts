/* Abstract Classes */
// Abstract classes are used to create a blueprint for other classes to extend
// Abstract classes cannot be instantiated directly
abstract class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  // This is an abstract method. It must be defined in any classes that extend this class
  abstract describe(this: Department): void;
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  describe(this: Department) {
    console.log("Accounting Department");
  }
}

const accounting = new AccountingDepartment("2", []);
accounting.describe();
