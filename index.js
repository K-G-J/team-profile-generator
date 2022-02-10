const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const {writeFile, copyFile} = require('./utils/generate-site.js');
// const generatePage = require('./src/page-template.js');

function init(employeeData) { 
    if (!employeeData) {
        employeeData = [];
    }
    inquirer.prompt ([
        {
            type: 'checkbox',
            name: 'role',
            message: 'Please select a role for the new employee',
            choices: ['Manager', 'Engineer', 'Intern']
        },
    ])
    .then(({role}) => {
        if ({ role: [ 'Engineer' ] }) {
            {   this.type = new Engineer()
                this.engineer.getName();
                this.engineer.getId();
                this.engineer.getEmail();
                this.engineer.getOffice();
                this.engineer.getRole()
                this.engineer.getGithub();
                employeeData.push(this);
            }
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
                    newEmployee.init(employeeData);
                } 
                else {
                    return (employeeData);
                }
            })
        }
        if (role === 'Intern') {
            this.type = new Intern
            this.name = this.intern.getName();
            this.id = this.intern.getId();
            this.email = this.intern.getEmail();
            this.office = this.intern.getOffice();
            this.role = this.intern.getRole()
            this.github = this.intern.getGithub();
            this.role = this.intern.getRole();
            this.school = this.intern.getSchool();
            employeeData.push(this);
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
                    newEmployee.init(employeeData);
                } 
                else {
                    return (employeeData);
                }
            })
        }
        if (role === 'Manager') {
            this.type = new Manager
            this.name = this.manager.getName();
            this.id = this.manager.getId();
            this.email = this.manager.getEmail();
            this.office = this.manager.getOffice();
            this.role = this.manager.getRole()
            this.github = this.manager.getGithub();
            this.role = this.manager.getRole();
            employeeData.push(this);
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
                    newEmployee.init(employeeData);
                } 
                else {
                    return (employeeData);
                }
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