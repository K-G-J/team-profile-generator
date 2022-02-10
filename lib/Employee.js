const inquirer = require('inquirer');
class Employee {
    constructor() {
        this.name = this.getName();
        this.id = this.getId();
        this.email = this.getEmail();
        this.office = this.getOffice();
        this.role = this.getRole();
    }
    getName() {
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
            }
        ])
    }
    getId() {
        return inquirer.prompt ([
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
            }
        ])
    }
    getEmail() {
        return inquirer.prompt ([
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
            }
        ])
    }
    getOffice() {
        return inquirer.prompt ([
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
        ])
    }
    getRole() {
        return 'Employee'
    }
}
module.exports = Employee;
