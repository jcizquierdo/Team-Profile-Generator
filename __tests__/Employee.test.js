const Employee = require("../lib/Employee");

test("new employee", ()=> {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("set employee", () => {
    const name = "Jose";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("set ID", () => {
    const testValue = 10;
    const employee = new Employee("Carlos", testValue);
    expect(employee.id).toBe(testValue);
});

test("set email", () => {
    const testValue = "jose@gmail.com";
    const employee = new Employee("Jose", 1, testValue);
    expect(employee.email).toBe(testValue);
});

test("get name", () => {
    const testValue = "Carlos";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
});

test("get ID", () => {
    const testValue = 50;
    const employee = new Employee("Jose", testValue);
    expect(employee.getId()).toBe(testValue);
});

test("get email", () => {
    const testValue = "carlos@gmail.com";
    const employee = new Employee("Carlos", 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
});

test("get role", () => {
    const testValue = "Employee";
    const employee = new Employee("Jose", 1, "jose@gmail.com");
    expect(employee.getRole()).toBe(testValue);
});