let express = require('express');
let app = express();

const publicPath = __dirname + '/public';

app.use("/public",express.static(publicPath));

app.get("/", function(req, res) {
  const viewPath = __dirname + '/views/index.html';
  res.sendFile(viewPath);
})
console.log("Hello World");



































 module.exports = app;
