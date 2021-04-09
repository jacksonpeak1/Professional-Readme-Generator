// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your Github Username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "What is a description of your project?",
  },
  {
    type: "input",
    name: "Installation",
    message: "What are the instillation instructions for your project?",
  },
  {
    type: "input",
    name: "Usage",
    message: "What is the usage information of your project?",
  },
  {
    type: "input",
    name: "Contributing",
    message: "What are the contribution guidelines for your project?",
  },
  {
    type: "input",
    name: "Tests",
    message: "What are the test instructions?",
  },
  {
    type: "list",
    name: "License",
    message: "Which license would you like to apply to this project?",
    choices: [
      "MIT",
      "Apache 2.0",
      "GPL 3.0",
      "ISC",
      "Microsoft Public License",
      "Mozilla Public License",
    ],
  },
];

// TODO: Create a function to write README file
function generateMarkdown(data) {
  return `hello world`;
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    fs.writeFile("Read-Me.md", generateMarkdown(data), (err) => {
      if (err) throw err;
      console.log("New Read-Me file generated!");
    });
  });
}

// Function call to initialize app
init();

const generateHTML = (answers) => {};
