class Employee {
    constructor(name = '') {
        this.name = getName(),
        this.id = getId(),
        this.email = getEmail()
    }
    getName() {
        // get name from prompts 
    }
    getId() {
        // get id from prompts 
    }
    getEmail() {
        // get email from prompts 
    }
    getRole() {
        return 'Employee'
    }
}
module.exports = Employee;
