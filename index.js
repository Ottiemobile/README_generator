const inquirer = require('inquirer');
const fs = require('fs');

//const generateMarkDown = require()

fs.writeFile('README.md',generateMarkDown(), err => {
    if (err) throw err;
    console.log('README has been generated')
});