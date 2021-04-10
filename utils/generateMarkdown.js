// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //if (license === "MIT") {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  //(https://opensource.org/licenses/MIT)`;
  //   } else if (license === "Apache 2.0") {
  //     return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  //   } else {
  //     return `another license`;
  //   }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

If you have questions please reach me through the below methods

Email: ${data.email}
Github: [${data.username}](https://github.com/${data.username}/)

`;
}

module.exports = generateMarkdown;
