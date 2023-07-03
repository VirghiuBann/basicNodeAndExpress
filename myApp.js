let express = require('express');
let app = express();

// app.get("/", function(req, res) {
//   res.send("Hello Express");
// })

app.get("/", function(req, res) {
  const viewPath = __dirname + '/views/index.html';
  res.sendFile(viewPath);
})
console.log("Hello World");



































 module.exports = app;
