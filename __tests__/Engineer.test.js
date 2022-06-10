//use the intern.js

const Engineer = require("../lib/Engineer");

//test to see if Engineer object gets created
test('Engineer object gets created', () => {
    const person = new Engineer('Jimmy', 42, 'jimmy@jimmy.com', 'jimmy32');

    expect(person.github).toEqual(expect.any(String));
});

//overwrites role from employee to engineer
test('Changes role of employee to intern', ()=> {
    const person = new Engineer ('Jimmy', 42, 'jimmy@jimmy.com', 'jimmy32');

    expect(person.getRole()).toEqual("Engineer");
});

//test to see if github get returned from getGithub()
test('Engineer has github id', () => {
    const person = new Engineer('Jimmy', 42, 'jimmy@jimmy.com', 'jimmy32');

    expect(person.getGitHub()).toEqual(expect.stringContaining(person.github.toString()));
});