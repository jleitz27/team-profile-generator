//use the intern.js

const Intern = require("../lib/Intern");

//test to see if intern object gets created
test('Intern object gets created', () => {
    const person = new Intern('Jimmy', 42, 'jimmy@jimmy.com', 'MSU');

    expect(person.school).toEqual(expect.any(String));
});

//overwrites role from employee to intern
test('Changes role of employee to intern', ()=> {
    const person = new Intern ('Jimmy', 42, 'jimmy@jimmy.com', 'MSU');

    expect(person.getRole()).toEqual("Intern");
});

//test to see if school get returned from getSchool()
test('Intern has school', () => {
    const person = new Intern('Jimmy', 42, 'jimmy@jimmy.com', 'MSU');

    expect(person.getSchool()).toEqual(expect.stringContaining(person.school.toString()));
});
