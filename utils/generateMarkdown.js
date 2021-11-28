// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n*[License](#license)\n`;
  }
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `# License
This project is licensed under the ${license} license.`;
  }
  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

# Description
${data.description}
${renderLicenseSection(data.license)}

# Table of Content
\n* [Installation](#installation)
\n* [Usage](#usage)
\n* [Contributing](#contributing)
\n* [Tests](#tests)
\n* [Questions](#questions)

# Installation
${data.installation}
# Usage
${data.usage}

Video tutorial:
https://www.youtube.com/watch?v=__6ZOUeAde8
# Contributing
${data.contribution}
# Tests
${data.tests}

# Questions 
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. 
You can find more of my work at [Github](https://github.com/${data.username})
  `;
}

module.exports = generateMarkdown ;
