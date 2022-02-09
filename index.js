const inquirer = require('inquirer');
const {writeFile, copyFile} = require('./utils/generate-site.js');
const generatePage = require('./src/page-template.js');
const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
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
        },
        {
            type: 'checkbox',
            name: 'addPosition',
            message: 'Please select a role or finish.',
            choices: ['Manager', 'Engineer', 'Intern', 'Finish']
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineer's GitHub username",
            When: ({addPosition}) => {
                if (addPosition === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub username!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school",
            When: ({addPosition}) => {
                if (addPosition === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Wold you like to enter another employee?',
            default: false
        }
    ])
    .then(answers => {
        employeeData.push(answers)
        if (answers.confirmAddEmployee) {
            return promptUser(employeeData);
        } else {
            return employeeData;
        }
    });
};

promptUser()
// .then (portfolioData => {
//     return generatePage(portfolioData)
// })
// .then(pageHTML => {
//     return writeFile(pageHTML)
// })
// .then (writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile()
// })
// .then(copyFileResponse => {
//     console.log(copyFileResponse);
// })
// .catch (err => {
//     console.log(err);
// });