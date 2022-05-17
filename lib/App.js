const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const generateHTML = require("../src/generateHTML");

const team = [];

const managerInfo = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the team manager's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeId",
      message: "Please enter your employee ID number (Required)",
      validate: (employeeID) => {
        if (employeeID) {
          return true;
        } else {
          console.log("Please enter your employee ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter your your email address (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "office",
      message: "Enter your office number (Required)",
      validate: (officeInput) => {
        if (officeInput) {
          return true;
        } else {
          console.log("Please enter your office number!");
          return false;
        }
      },
    },
  ]).then(data => {
      console.log(data)
      const manager = new Manager(data.name, data.employeeId, data.email, data.office)
      console.log(manager)
  })
};

const managerChoice = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "option",
      message:
        "Would you like to add an engineer, intern, or finish building your team ",
      choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
    },
  ]);
};

const addEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name? (Required)",
      validate: (engineerName) => {
        if (engineerName) {
          return true;
        } else {
          console.log("Please enter the engineer's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeId",
      message: "Please enter the engineer's employee ID number (Required)",
      validate: (employeeId) => {
        if (employeeId) {
          return true;
        } else {
          console.log("Please enter an employee ID number!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter your the engineer's email address (Required)",
      validate: (employeeEmail) => {
        if (employeeEmail) {
          return true;
        } else {
          console.log("Please enter an email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter the engineer's gihub (Required)",
      validate: (employeeGithub) => {
        if (employeeGithub) {
          return true;
        } else {
          console.log("Please enter a github name!");
          return false;
        }
      },
    },
  ]);
};

const addIntern = () => [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name? (Required)",
    validate: (internName) => {
      if (internName) {
        return true;
      } else {
        console.log("Please enter a name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "employeeId",
    message: "Please enter the intern's employee ID number (Required)",
    validate: (internId) => {
      if (internId) {
        return true;
      } else {
        console.log("Please enter an ID number!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter the intern's email address (Required)",
    validate: (internEmail) => {
      if (internEmail) {
        return true;
      } else {
        console.log("Please enter an email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "school",
    message: "Enter the intern's school (Required)",
    validate: (internSchool) => {
      if (internSchool) {
        return true;
      } else {
        console.log("Please enter a school!");
        return false;
      }
    },
  },
];

managerInfo();
