const http = require("http");
const express = require("express");
const app = express();
// var index = require('./views/index.html');
app.get("/", (request, response) => {});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
