const express = require("express");

const app = express();

app.get("/currenttime", function (request, response) {
  response.send("<h1>" + new Date().toISOString() + "</h1>");
});

app.get("/", function (req, res) {
  res.send("<h3>Howdy Express</h3>");
});

app.listen(3000);
