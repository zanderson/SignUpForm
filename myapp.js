// Requires \\
var express = require('express');
var bodyParser = require('body-parser');


// Create Express App Object \\
var app = express();
 hi there
// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendfile('/public/index.html')
});

app.post('/formsubmit', function(req, res){
	res.redirect('/success')
})

app.get('/success', function(req, res){
	res.send('Success chuckleheads!')
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
})
