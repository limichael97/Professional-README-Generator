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
    message: 'What do you want to name your project?',
  },

  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?',
  },

  {
    type: 'input',
    name: 'installation',
    message: 'What is installation instruction of your project?',
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples here',
  },

  {
    type: 'input',
    name: 'contribution',
    message: 'Who contributed to this project?',
  },

  {
    type: 'rawlist',
    name: 'license',
    message: 'Would you like a license in your project?',
    choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3'],
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Write tests for your application here.',
  },

  {
    type: 'input',
    name: 'username',
    message: 'What is your github username?',
  },

  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  
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
