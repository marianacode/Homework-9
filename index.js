
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown")
const api = require(".utils/api")


// array of questions for user
function askQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },

        {
            type: "input",
            message: "Please enter your GitHub email",
            name: "email"
        },

        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },

        {
            type: "input",
            message: "What technologies were used to create your project?",
            name: "technology"
        },

        {
            type: "input",
            message: "Provide a description of your project",
            name: "udescription"
        },

        {
            type: "input",
            message: "Provide an example of how your project can be used?",
            name: "example"
        },

        {
            type: "input",
            message: "Provide the URL of your project?",
            name: "URL"
        },

       
    ])
}



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
        if (err) {
            throw err;
        }
        console.log("You have successfully written your README file");
    
});
};


// function to initialize program
async function init() {
try {
    const answers = await askQuestions();
    generateMarkdown(answers);
    writeToFile("README.md", generateMarkdown(answers));

} catch (err) {
    console.log(err);
}
};

// function call to initialize program
 init();
