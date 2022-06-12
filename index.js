
// different team roles
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");



const renderHTML = require('./src/renderHTML.js');
console.log(renderHTML);

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
            validate: (value) => value.match(/^\d*$/) ? true : 'Please enter a number'
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
            message: "What is the Manager's office number?",
            validate: (value) => value.match(/^\d*$/) ? true : 'Please enter a number'
        }
    ])
    .then(managerData => {
        const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        
        employees.push(manager);
        console.log(manager);
    })
};

//prompts for employees
const employeeQuestions = () => {
    console.log(`
    
    Let's add team members
    
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the name of this team member?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: (value) => value.match(/^\d*$/) ? true : 'Please enter a number'
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is their GitHub username?",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is this intern's school?",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more members to this team?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        employees.push(employee); 

        if (confirmAddEmployee) {
            return employeeQuestions(employees); 
        } else {
            return employees;
        }
    })

};


//function to create the html page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been created!")
        }
    })
}; 

managerQuestions()
    .then(employeeQuestions)
    .then(employees => {
        return renderHTML(employees);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
    console.log(err);
    });