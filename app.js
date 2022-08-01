
const fs = require('fs');
const path = require('path');
const express = require("express");

const app = express();

app.use(express.urlencoded({extended: false}));

app.get("/currenttime", function (request, response) {
  response.send("<h1>" + new Date().toISOString() + "</h1>");
});

app.get("/", function (req, res) {
  res.send('<form action="/store-user" method="POST"><label>Your name .</label><br><input type="text" name="username"></input><br><button>Submit</button></form>');
});

app.post('/store-user', function(req, res){
   const userName =  req.body.username;
   const filePath = path.join(__dirname, 'data', 'users.json');

   const fileData = fs.readFileSync(filePath);

   const existingUsers = JSON.parse(fileData);

   existingUsers.push(userName);

   fs.writeFileSync(filePath, JSON.stringify(existingUsers));

   res.send('<h2>Username Stored</h2>');
});

app.listen(3000);
