
// different team roles
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//array for employees
const employees = [];

//prompts for manager

const managerQuestions = ()=> {
    console.log(`
    --------------------
    Let's build the team
    --------------------
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name:'name',
            message: 'What is the name of the team manager?'           

        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Manager's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the Manager's email address?`,
            validate: function (value) {
                let pass = value.match(
                    /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                );
                if (pass) {
                    return true;
                }
                return 'Please enter a valid email address!';
            },
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Manager's office number?"
        }
    ])
    .then(managerData => {
        const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        
        employees.push(manager);
        console.log(manager);
    })
};

//prompts for employees
function addEmployee () {
    console.log(`
    ----------------------
    Let's add team members
    ----------------------
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name:'role',
            message: 'What is the role of the employee?',
            choices: ['Engineer', 'Intern']           

        }
    ])
    .then(function(data){
        if (data.role === "Engineer"){
            engineer();
        } else if (data.role === "Intern"){
            intern();
        } else (outputTeam());
    });

    

    
    
};

//team roles
function engineer () {
    return inquirer.prompt([
        {
            type: 'input',
            name:'name',
            message: 'What is the name of this team member?'           

        },
        {
            type: 'input',
            name: 'id',
            message: "What is their ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: `What is their email address?`,
            validate: function (value) {
                let pass = value.match(
                    /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                );
                if (pass) {
                    return true;
                }
                return 'Please enter a valid email address!';
            },
        },
        {
            type: 'input',
            name: 'github',
            message: "What is their GitHub username?"
        }
    ])
    .then(engineerData => {
        const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
        
        employees.push(engineer);
        console.log(engineer);
        addEmployee(); 
    })
}

function intern () {
    return inquirer.prompt([
        {
            type: 'input',
            name:'name',
            message: 'What is the name of this team member?'           

        },
        {
            type: 'input',
            name: 'id',
            message: "What is their ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: `What is their email address?`,
            validate: function (value) {
                let pass = value.match(
                    /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                );
                if (pass) {
                    return true;
                }
                return 'Please enter a valid email address!';
            },
        },
        {
            type: 'input',
            name: 'school',
            message: "What is this intern's school?"
        }
    ])
    .then(internData => {
        const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
        
        employees.push(intern);
        console.log(intern);
        addEmployee(); 
    })
}

managerQuestions()
    .then (addEmployee())
    .catch(err => {
        console.log(err);
    });