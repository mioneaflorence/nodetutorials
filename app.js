var express = require('express');
var bodyParser = require('body-parser');

var router = require('./routes/users');
var app = express();


//app.get('/listUsers', function (req, res) {
   //fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    //   console.log( data );

    //  res.send( data );
//   });
//})

app.use('/', router);
app.listen(3000,function(){
  console.log('Log started on port 3000....');

});
