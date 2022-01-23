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


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
