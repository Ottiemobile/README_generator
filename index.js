const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./src/markDownTemplate.js');

const questions = [

    {
        name: "username",
        type: "input",
        message:"Please insert your username:"
    },
    
    {
        name: "email",
        type: "input",
        message: "Please insert your E-mail:"
    },
    
    {
        name: "project",
        type: "input",
        message: "Insert the name of the project"
    },
    
    {
        name: "description",
        type: "input",
        message: "Write a quick and short description of your project and its function:"
    },
    
    {
        name: "license",
        type: "list",
        message: "Select a License for you README file:",
        choices: ["MIT","GPL","BSD","Apache"]
    },
    
    {
        name: 'installations',
        type: "input",
        message: 'What command should be running when installing dependancies?',
        default: 'npm install'
    },
    
    {
        name: 'test',
        type: "input",
        message: 'what command should be running when running tests?'
    },
    
    {
        name: 'usage',
        type: "input",
        message: ' how are you using this repository?'
    },
    
    {
        name: 'contributing',
        type: "input",
        message: "how are you contributing to this repo?"
    }
    ];

//const generateMarkDown = require()
inquirer.prompt(questions).then(response => {
    fs.writeFile('output/README.md',generateMarkDown(response), err => {
        if (err) throw err;
        console.log('README has been generated! go to the output folder and see your new file!')
    });
});
