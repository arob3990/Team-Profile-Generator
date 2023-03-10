// html generation code dependency
const createHTML = require('./src/htmlrender')

//employee classes
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const inquirer = require('inquirer');
const fs = require('fs');


const team = [];

//begin of command line prompts starting with manager
const createManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the manager's name"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter in the manager's ID number"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter in the manager's email address"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter in the manager's office number"
        },
    
    ])
// takes answers to create a new Manager object
    .then((answers) => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager)
        


    })
};
//after manager questions are answered, employee questions will begin
    const addEmployee = () =>{
        return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please choose the employee's role",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "Please enter in the employee's name"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter in the employee's ID number"
        },
        {
            type: "input",
            name: "email", 
            message: "Please enter in the employee's email address"
        },
        {
            type: "input",
            name: "github", 
            message: "Please enter in the employee's github username",
            when: (input) => input.role === "Engineer",
        },
        {
            type: "input",
            name: "school",
            message: "Please enter in the intern's school",
            when: (input) => input.role === "Intern"
        },
        //below input prompts the user to see if they'd like to add more employees
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add any more employees to your team?",
            default: false
        }
    ])
    //inputs from employee questions are logged as Engineer or Intern objects depending on user selection
    .then((employeeAnswers) => {
        if(employeeAnswers.role === "Engineer"){
            employee = new Engineer (employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.github);
            console.log(employee)
        } else if (employeeAnswers.role === "Intern"){
            employee = new Intern (employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.school);
            console.log(employee)
        }
        team.push(employee);
//if the user answers 'yes' to add more employees, the questions will cycle through again until the user answers 'no'
        if(employeeAnswers.addEmployee){
            return addEmployee(team);
        } else {
            return team;
        }
    })
}

// write HTML page index.html using data

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("You have successfully created your team. The html file was generated and called index.html")
        }
    })
}

createManager()
.then(addEmployee)
.then(team => {
    return createHTML(team);
})
.then(pageHTML =>{
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});
 
  