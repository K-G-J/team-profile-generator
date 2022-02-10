const inquirer = require('inquirer')
module.exports = {
    startQuestions: [
        {
            type: 'input',
            name: 'name',
            message: "What is the employees's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employees's name!");
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the employee ID',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
                name: 'email',
                message: 'Enter the employee email',
                validate: employeeEmailInput => {
                    if (employeeEmailInput) {
                        return true;
                    } else {
                        console.log('Please enter the employee email!');
                        return false;
                    }
                }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Select a role for the new employee',
            choices: ['Manager', 'Engineer', 'Intern']
        },
    ],
    engineerQuestions: [
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineer's GitHub username",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub username!");
                    return false;
                }
            }
        },
    ],
    internQuestions: [
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }

        },
    ],
    managerQuestions: [
        {
            type: 'input',
            name: 'office',
            message: 'Enter the employee office number',
            validate: employeeOfficeInput => {
                if (employeeOfficeInput) {
                    return true;
                } else {
                    console.log('Please enter the employee office number!');
                    return false;
                }
            }

        }
    ],
    confirmQuestion: [
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Wold you like to enter another employee',
            default: false
        }
    ],
};