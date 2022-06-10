//use the manager.js

const Manager = require("../lib/Manager");

//test to see if manager object gets created
test('Manager object gets created', () => {
    const person = new Manager('Jimmy', 42, 'jimmy@jimmy.com', 17);

    expect(person.officeNumber).toEqual(expect.any(Number));
});

//overwrites role from employee to manager
test('Changes role of employee to manager', ()=> {
    const person = new Manager ('Jimmy', 42, 'jimmy@jimmy.com', 17);

    expect(person.getRole()).toEqual("Manager");
});
