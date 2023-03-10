/* Singleton Classes */
abstract class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  // This is an abstract method. It must be defined in any classes that extend this class
  abstract describe(this: Department): void;
}

// Singleton Class
// This class can only be instantiated once
// The constructor is private
// The static method getInstance() is used to create the instance
// The static property instance is used to store the instance
class AccountingDepartment extends Department {
  static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("2", []);
    return this.instance;
  }

  describe(this: Department) {
    console.log("Accounting Department");
  }
}

const accounting = AccountingDepartment.getInstance();
accounting.describe();
