var router = require('express').Router();
var fs = require('fs');
router.get('/listUsers', function (req, res) {
//  fs.readFile( "./"+__dirname + "/" + "users.json", 'utf8', function (err, data) {
    fs.readFile( "C:/Projects/tema1/users.json", 'utf8', function (err, data) {
       console.log( data );
      res.end( data );
   });
})
module.exports = router;
