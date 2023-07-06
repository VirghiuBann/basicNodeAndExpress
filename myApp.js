require('dotenv').config()
let express = require('express');
const bodyParser = require('body-parser');

let app = express();

const publicPath = __dirname + '/public';

app.use("/public",express.static(publicPath));

app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", function(req, res) {
  const viewPath = __dirname + '/views/index.html';
  res.sendFile(viewPath);
});

app.get("/:word/echo", function(req, res) {
  res.send({echo: req.params.word});
});

app.get("/json", function(req, res) {
  const messageStyle = process.env.MESSAGE_STYLE;
  let message = 'Hello json';
  message = messageStyle == 'uppercase' ? message.toUpperCase() : message; 

  res.json({"message": message});
});

app.get("/now", function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
    res.send({time: req.time});
});

app.route("/name")
  .get(function(req, res) {
    const firstName = req.query.first;
    const lastName = req.query.last;
    res.send({name: firstName+" "+lastName});
  });

console.log("Hello World");



































 module.exports = app;
