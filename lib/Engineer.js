const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name)
        this.github = this.getGithub();
        this.role = this.getRole();
    }
    getGithub() {
        return inquirer.prompt([
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
            }
        ])
    }
    getRole() {
        return 'Engineer'
    }
};
module.exports = Engineer;