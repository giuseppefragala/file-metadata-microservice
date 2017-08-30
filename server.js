var express = require('express');
var app = express();
var path = require('path');
var moment = require('moment');
var bodyParser = require('body-parser')

app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname + '/index.htm'));
});


app.get('/:id', function(req, res) {

    res.send(output);
});


// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }))

// Route that receives a POST request to /
app.post('/', function (req, res) {
  const body = req.body
  res.set('Content-Type', 'text/plain')
  res.send(`You sent: ${body} to Express`)
})


app.listen(process.env.PORT || 3000)
console.log("Server is listening you!");

