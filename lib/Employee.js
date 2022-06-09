//create an Employee class and contructors
class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //return name
    getName (){
        return this.name;
    }
    //return id
    getId (){
        return this.id;
    }
    //return email
    getEmail(){
        return this.email;
    }
    //return role
    getRole(){
        return "Employee";
    }
};

//export these items
module.exports = Employee;