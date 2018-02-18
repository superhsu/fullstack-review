var getHelper = require('../helpers/github.js');
var dataBase = require('../database/index.js')

const express = require('express');
let bodyParser = require('body-parser');
let app = express();

console.log('databased:', dataBase);

app.use(bodyParser.text());
//use .urlencoded for default datatype. use .json for json type data
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) { // will get request from ajax with url /repos 
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  var userData = getHelper.getReposByUsername(req.body, function (data) {
    //put your save function here
    // 1: parse it json.parse(data)
    // 2. loop through it
    // 3. grab specific props that we need for save function
    // 4. store it into object
    // end goal is to store it into data base 

    parsedData = JSON.parse(data);
    // console.log(parsedData);
    for (var i = 0; i < parsedData.length; i++) {
      dataBase.save(parsedData[i]);
    }
  });
  res.end();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

  // res.send(console.log('getting repos!'));

  dataBase.find(function (repos) {
    res.send(repos);
  }); 

  // res.send(dataBase.find());

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

