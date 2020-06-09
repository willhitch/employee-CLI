const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")

const render = require("./lib/htmlRenderer")
const employee = []

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function init() {
  inquirer
    .prompt([
      {
        type: "checkbox",
        name: "role",
        message: "What kind of Employee would you like to create?",
        choices: ["Engineer", "Intern", "Manager", "I'm Done"],
      },
    ])
    .then((data) => {
      switch (data.role[0]) {
        case "Engineer":
          makeEngineer()
          break
        case "Intern":
          makeIntern()
          break
        case "Manager":
          makeManager()
          break
        case "I'm Done":
          makeTeam()
          break
      }
    })
}

function makeEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "What is the Engineer's ID?",
      },
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's Github username?",
      },
    ])
    .then((data) => {
      const e = new Engineer(data.name, data.id, data.email, data.github)
      employee.push(e)
      init()
    })
}

function makeIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "What is the Interns's ID?",
      },
      {
        type: "input",
        name: "name",
        message: "What is the Interns's name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Interns's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What school did this Intern attend?",
      },
    ])
    .then((data) => {
      const i = new Intern(data.name, data.id, data.email, data.school)
      employee.push(i)
      init()
    })
}

function makeManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "What is the Manager's ID?",
      },
      {
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is this Manager's office number?",
      },
    ])
    .then((data) => {
      const m = new Manager(data.name, data.id, data.email, data.officeNumber)
      employee.push(m)
      init()
    })
}

function makeTeam() {
  fs.mkdirSync(OUTPUT_DIR)
  fs.writeFileSync(outputPath, render(employee))
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// Start Prompt
init()
