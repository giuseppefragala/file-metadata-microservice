var express = require('express');
var app = express();
var path = require('path');
var multer  = require('multer')
var upload = multer()

app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname + '/index.htm'));
});


app.post('/get-file-size', upload.single('file'), function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
  if(!req.file)res.end('Internal Server Error')
  var obj={size: req.file.size}
  res.end(JSON.stringify(obj));
})



app.listen(process.env.PORT || 3000)
console.log("Server is listening you!");

