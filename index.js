const inquirer = require('inquirer');
const questions = require('./lib/questions')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const {writeFile, copyFile} = require('./utils/generate-site.js');
const generatePage = require('./src/page-template.js');

const mockData = [
    {
        name: "Greg Smith",
        id: 22,
        email: "greg@email.com",
        role: "Manager",
        office: 12
    },
    {
        name: "Lukas John",
        id: 33,
        email: "lukas@email.com",
        role: "Manager",
        office: 24
    },
    {
        name: "Sally Lang",
        id: 44,
        email: "sally@email.com",
        role: "Manager",
        office: 16
    },
    {
        name: "Joe Warner",
        id: 41,
        email: "joe@email.com",
        role: "Engineer",
        github: "joehub"
    },
    {
        name: "Walker Pete",
        id: 13,
        email: "walker@email.com",
        role: "Engineer",
        github: "walkerhub"
    },
    {
        name: "Martha Doe",
        id: 8,
        email: "martha@email.com",
        role: "Engineer",
        github: "marthahub"
    },
    {
        name: "Billy Bob",
        id: 36,
        email: "billy@email.com",
        role: "Intern",
        school: "Jupiter University"
    },
    {
        name: "Mandy Riely",
        id: 37,
        email: "mandy@email.com",
        role: "Intern",
        school: "Mars University"
    },
    {
        name: "Wilson Jeffries",
        id: 42,
        email: "wilson@email.com",
        role: "Intern",
        school: "Saturn University"
    }
]
let employeeData = []

function init() {
    return inquirer.prompt(questions.startQuestions);
}
function getEmployeeData(answers) {
    if (answers.role === 'Engineer') {
        let engineer = new Engineer (
            answers.name,
            answers.id,
            answers.email,
            answers.role
        )
        return getEngineerData(engineer);
    } else if (answers.role === 'Intern') {
        let intern = new Intern (
            answers.name,
            answers.id,
            answers.email,
            answers.role
        )
        return getInternData(intern)
    } else if (answers.role === 'Manager') {
        let manager = new Manager (
            answers.name,
            answers.id,
            answers.email,
            answers.role
        )
        return getManagerData(manager)
    } 
}

function getEngineerData(engineer) {
        return new Promise((resolve) => {
            resolve (
            inquirer.prompt(questions.engineerQuestions)
            .then ((response) => {
                    engineer = {...engineer, ...response};
                    // console.log(engineer)
                    employeeData.push(engineer)
                }
            )
        )
    })
}
function getInternData(intern) {
        return new Promise((resolve) => {
            resolve (
            inquirer.prompt(questions.internQuestions)
            .then ((response) => {
                    intern = {...intern, ...response};
                    // console.log(intern)
                    employeeData.push(intern)
                }
            )
        )
    })
}
function getManagerData(manager) {
        return new Promise((resolve) => {
            resolve (
            inquirer.prompt(questions.managerQuestions)
            .then ((response) => {
                    manager = {...manager, ...response};
                    // console.log(manager)
                    employeeData.push(manager)
                }
            )
        )
    })
}
function confirm() {
    return inquirer.prompt(questions.confirmQuestion)
}

function buildTeam() {
    init()
    .then(answers => getEmployeeData(answers))
    .then(confirm)
    .then(response => {
        if (response.confirmAdd) {
            buildTeam()
            return employeeData
        } return mockData
    })     
    .then(mockData => generatePage(mockData))
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
    .then (writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile()
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch (err => {
        console.log(err);
    });
}
buildTeam();
