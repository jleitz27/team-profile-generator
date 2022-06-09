const Employee = require("../lib/Employee");

test ('Initiate Employee instace', ()=> {
    const person = new Employee ();
    expect(typeof(person)).toBe("object");
});

//testing name
test("Get's the name ", () => {
    const name = "Jimmy";
    const person = new Employee(name);
    expect(person.name).toBe(name);
});

test("Get's the id", () => {
    const testId = 42;
    const person = new Employee("Jimmy", testId);
    expect(person.id).toBe(testId);
});

test("Get's the email", () => {
    const testEmail = "jimmy@jimmy.com";
    const person = new Employee("Jimmy", 1, testEmail);
    expect(person.email).toBe(testEmail);
});

test("Get name by getName()", () => {
    const testItem = "Jimmy";
    const person = new Employee(testItem);
    expect(person.getName()).toBe(testItem);
});

test("Get id by getId()", () => {
    const testItem = 42;
    const person = new Employee("Jimmy", testItem);
    expect(person.getId()).toBe(testItem);
});

test("Get email by getEmail()", () => {
    const testItem = "jimmy@jimmy.com";
    const person = new Employee("Foo", 42, testItem);
    expect(person.getEmail()).toBe(testItem);
});

test("getRole() should return \"Employee\"", () => {
    const testItem = "Employee";
    const person = new Employee("Jimmy", 42, "jimmy@jimmy.com");
    expect(person.getRole()).toBe(testItem);
});

