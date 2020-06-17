const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const html = require("./src/htmlTemp");
const validator = require("email-validator");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// sets async functions
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let team = ``;

console.clear();

// function to run and create more employees
async function runApp() {
    try {
        await prompt()
        for(let i = 0; i < teamArray.length; i++) {
            team = team + html.createCard(teamArray[i]);
        }
        let createdHtml = html.createHTML(team)
        writeFileAsync("./dist/index.html", createdHtml);
        console.clear();
        console.log("Index.html file created");

    } catch (err) {
        return console.log(err);
    }
}

// using inquirer gathers user input
async function prompt() {
    let userInput = "";

    do {
        try {
            console.log("----------------------");
            let input = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the employee's name?:",
                    validate: function validateName(name){
                        return name !== '';
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the employee's ID:",
                    validate: function validateName(name){
                        return name !== '';
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the employee's email address:",
                    // e-mail validator
                    validate: function validateEmail(name){
                        return validator.validate(name);
                    }
                },
                {
                    type: "list",
                    name: "role",
                    message: "What what is the employee's role:",
                    choices: [
                         "Manager",
                         "Engineer",
                         "Intern"
                    ]
                }
            ]);

            let secondInput = ""

               if (input.role === "Engineer") {
                    secondInput = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "What is the employee's github username?:",
                         validate: function validateName(name){
                            return name !== '';
                        },
                    }, ]);
                    const engineer = new Engineer(input.name, input.id, input.email, secondInput.x);
                    teamArray.push(engineer);

               } else if (input.role === "Intern") {
                    secondInput = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "What school is the employee attending?:",
                         validate: function validateName(name){
                            return name !== '';
                        },
                    }, ]);
                    const intern = new Intern(input.name, input.id, input.email, secondInput.x);
                    teamArray.push(intern);

               } else if (input.role === "Manager") {
                    secondInput = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "What is the employee's office number?:",
                         validate: function validateName(name){
                            return name !== '';
                        },
                    }, ]);
                    const manager = new Manager(input.name, input.id, input.email, secondInput.x);
                    teamArray.push(manager);
               }
        } catch (err) {
            return console.log(err);
        }

          userInput = await inquirer.prompt([{
               type: "list",
               name: "finish",
               message: "Do you have another employee to add?",
               choices: [
                    "Yes",
                    "No"
               ]
            },]);

     } while (userInput.finish === "Yes");
}

runApp();