const request = require('request');
const config = require('../config.js');

//need a callback for this function because it makes a async request
let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function (error, response, body) {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode);
    callback(body);
  });
}

module.exports.getReposByUsername = getReposByUsername;