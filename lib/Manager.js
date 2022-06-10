const Employee = require("./Employee");

//create a Manager class and contructors and extends from Employee
class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    //Overridden to return 'Manager'
    getRole(){
        return "Manager";
    }
};

//export these items
module.exports = Manager;