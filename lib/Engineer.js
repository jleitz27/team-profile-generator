const Employee = require("./Employee");

//create an Engineer class and contructors and extends from Employee
class Engineer extends Employee {
    constructor (name, id, email, github){
        super (name, id, email);
        this.github = github;
    }
    //return name
    getGitHub (){
        return this.github;
    }

    //Overridden to return 'Engineer'
    getRole(){
        return "Engineer";
    }
};

//export these items
module.exports = Engineer;