const Intern = require("../lib/Intern");

test("set school", () => {
    const testValue = "UT at Austin";
    const employee = new Intern("Jose", 1, "jose@gmail.com", testValue);
    expect(employee.school).toBe(testValue);
});

test("get role", () => {
    const testValue = "Intern";
    const employee = new Intern("Carlos", 1, "carlos@gmail.com", "UT at Austin");
    expect(employee.getRole()).toBe(testValue);
});

test("get school", () => {
    const testValue = "Texas State";
    const employee = new Intern("David", 1, "david@gmail.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});