// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Enter project title: "
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter project description: "
    },
    {
        type: 'input',
        name: 'installation',
        message: "Enter installation instructions: "
    },
    {
        type: 'input',
        name: 'usage',
        message: "Enter usage information: "
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Enter contribution guidelines: "
    },
    {
        type: 'input',
        name: 'test',
        message: "Enter test instructions: "
    },
    {
        type: 'list',
        name: 'license',
        message: "Select one of the following licenses:",
        choices: ["Apache", "GNU General Public License (GPL)", "MIT", "Mozilla"]
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your email: "
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter your GitHub username: "
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log("Data written to file."));
}

// Create a function to initialize app
function init() {
    let fileName = "README.md";

    inquirer.prompt(questions)
        .then((response) => {
            console.log(response);
            writeToFile(fileName, response);
        })
}

// Function call to initialize app
init();