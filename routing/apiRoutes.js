let friends  = require('../data/friends.js');
const router = require('express').Router();

function findBestFriend(user){
	let scoreDifferentials = [];

	for (var i = 0; i < friends.length; i++) {
		let difference = 0;
		for (var j = 0; j < friends[i].scores.length; j++) {
			difference += Math.abs(user.scores[j] - friends[i].scores[j]);
		}
		scoreDifferentials.push(difference);
	}
	
	let minScore = Math.min(...scoreDifferentials);

	let minIndex = scoreDifferentials.indexOf(minScore);

	friends[minIndex].difference = minScore;

	return friends[minIndex];
}

router.get('/api/friends', function(req, res){
	res.json(friends);
});

router.post('/api/friends', function(req, res){
	let topFriend = {};
	let newUser = req.body;

	// console.log(newUser);

	topFriend = findBestFriend(newUser);

	// console.log(topFriend);

	res.json(topFriend);
});



module.exports = router;