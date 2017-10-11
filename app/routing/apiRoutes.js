var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {
		var userInput = req.body;
		var userResponse = userInput.scores;
		var match = {
			name: "",
			photo: "",
			difference: 1000
		};

		for (var i = 0; i < friends.length; i++) {
			var totalDifference = 0;
			for (var x = 0; x < userResponse.length; x++) {
				totalDifference += Math.abs(friends[i].scores[x] - userResponse[x]);
				
				if (totalDifference <= match.difference){
						match.name = friends[i].name;
						match.photo = friends[i].photo;
						match.difference = totalDifference;
				}
			}
		}

		friends.push(userInput);

		res.json(match);

	});
};