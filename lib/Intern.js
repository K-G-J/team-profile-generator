const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
        super(name)
        this.school = this.getSchool();
        this.role = this.getRole();
    }
    getSchool() {
        return inquirer.prompt([
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
            }
        ])
    }
    getRole() {
        return 'Intern';
    }
};
module.exports = Intern;
