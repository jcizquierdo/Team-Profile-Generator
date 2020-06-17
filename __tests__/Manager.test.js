const Manager = require("../lib/Manager");

test("set office number", () => {
    const testValue = 10;
    const employee = new Manager("Jose", 1, "jose@gmail.com", testValue);
    expect(employee.officeNumber).toBe(testValue);
});

test("get role", () => {
    const testValue = "Manager";
    const employee = new Manager("Carlos", 1, "carlos@gmail.com");
    expect(employee.getRole()).toBe(testValue);
});

test("get office number", () => {
    const testValue = 50;
    const employee = new Manager("David", 1, "david@gmail.com", testValue);
    expect(employee.getOfficeNumber()).toBe(testValue);
});