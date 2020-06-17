const Engineer = require("../lib/Engineer");

test("set github", () => {
    const testValue = "GitHub";
    const employee = new Engineer("Jose", 1, "jose@gmail.com", testValue);
    expect (employee.github).toBe(testValue);
});

test("get role", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Carlos", 1, "carlos@gmail.com", "GitHub");
    expect (employee.getRole()).toBe(testValue);
});

test("get github", () => {
    const testValue = "GitHub";
    const employee = new Engineer("David", 1, "david@gmail.com", testValue);
    expect (employee.getGitHub()).toBe(testValue);
});