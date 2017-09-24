var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 3000));

var friends = require('./app/data/friends.js');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.text());

app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

app.use(express.static('public'));

app.use(require('./app/routing/apiRoutes.js'));
app.use(require('./app/routing/htmlRoutes.js'));

app.listen(app.get('port'), function(){
	console.log('Server running on port: ' + app.get('port'));
});