// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What do you want to name your project? (Required)',
  },

  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project? (Required)',
  },

  {
    type: 'confirm',
    name: 'license',
    message: 'Would you like a license in your project?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("readme.md", generateMarkdown({...answers}))
  })
}

// Function call to initialize app
init();
