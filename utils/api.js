const inquirer = require("inquirer");
const axios = require("axios");

// Prompt user for GitHub details 
const api = {
  getUser(username) {
    inquirer
    .prompt({
      message: "What is your user GitHub username?",
      name: "username"
    }) 

    // Grab the GitHub UserName Details from the source 
    .then(function({ username }) {
      const queryUrl = `https://api.github.com/users/${username}`;

      // Grab the GitHub avatar image
      axios.get(queryUrl).then(function(res) {
        const avatarURL = res.data.avatar_url
        console.log(avatarURL);
      });  
    });    
  }
};

// Export data in 'const api' to the index.js page 
module.exports = api;