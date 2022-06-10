const Employee = require("./Employee");

//create an Intern class and contructors and extends from Employee
class Intern extends Employee {
    constructor (name, id, email, school){
        super (name, id, email);
        this.school = school;
    }
    //return name
    getSchool (){
        return this.school;
    }

    //Overridden to return 'Intern'
    getRole(){
        return "Intern";
    }
};

//export these items
module.exports = Intern;