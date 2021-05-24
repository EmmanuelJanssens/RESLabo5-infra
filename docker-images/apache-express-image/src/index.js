var generator = require('./generator')

var express = require('express')
var app = express();

app.get("/", function(req,res){
    res.send(generator.generateCountries());
});



app.listen(3000, function(){
    console.log('Accepting HTTP requests on port 3000');
});


