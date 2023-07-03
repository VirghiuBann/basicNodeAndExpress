require('dotenv').config()
let express = require('express');
let app = express();

const publicPath = __dirname + '/public';

app.use("/public",express.static(publicPath));

app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/", function(req, res) {
  const viewPath = __dirname + '/views/index.html';
  res.sendFile(viewPath);
});

app.get("/json", function(req, res) {
  const messageStyle = process.env.MESSAGE_STYLE;
  let message = 'Hello json';
  message = messageStyle == 'uppercase' ? message.toUpperCase() : message; 

  res.json({"message": message});
});
console.log("Hello World");



































 module.exports = app;
