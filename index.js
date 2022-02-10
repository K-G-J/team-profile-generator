const inquirer = require('inquirer');
const questions = require('./lib/questions')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const {writeFile, copyFile} = require('./utils/generate-site.js');
// const generatePage = require('./src/page-template.js');

function init(employeeData) { 
    if (!employeeData) {
        employeeData = [];
    }
    inquirer.prompt(questions.startQuestions)
    .then((answers) => {
        if (answers.role === 'Engineer') {
            let engineer = new Engineer (
                answers.name,
                answers.id,
                answers.email,
            )
            inquirer.prompt(questions.engineerQuestions)
            .then((response) => {
                engineer = { ...engineer, ...response };
                console.log(engineer)
                employeeData.push(engineer)
                inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'confirmAdd',
                        message: 'Wold you like to enter another employee',
                        default: false
                    }
                ])
                .then(({confirmAdd}) => {
                    if (confirmAdd) {
                        init(employeeData);
                    } 
                    else {
                        return (employeeData);
                    }
            })
            }) 
        } else if (answers.role === 'Intern') {
            let intern = new Intern (
                answers.name,
                answers.id,
                answers.email,
            )
            inquirer.prompt(questions.internQuestions)
            .then((response) => {
                intern = { ...intern, ...response };
                console.log(intern)
                employeeData.push(intern)
                inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'confirmAdd',
                        message: 'Wold you like to enter another employee',
                        default: false
                    }
                ])
                .then(({confirmAdd}) => {
                    if (confirmAdd) {
                        init(employeeData);
                    } 
                    else {
                        return (employeeData);
                    }
            })
            })
        } else if (answers.role === 'Manager') {
            let manager = new Manager (
                answers.name,
                answers.id,
                answers.email,
            )
            inquirer.prompt(questions.managerQuestions)
            .then((response) => {
                manager = { ...manager, ...response };
                console.log(manager)
                employeeData.push(manager)
                inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'confirmAdd',
                        message: 'Wold you like to enter another employee',
                        default: false
                    }
                ])
                .then(({confirmAdd}) => {
                    if (confirmAdd) {
                        init(employeeData);
                    } 
                    else {
                        return (employeeData);
                    }
            })
            })
        }
    })
}
init()
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