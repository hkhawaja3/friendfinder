const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/survey', function(req,res){
	res.sendFile(path.join(__dirname, '../public/survey.html'));
});

router.use('/', function(req, res){
	res.sendFile(path.join(__dirname, '../public/home.html'));
});

module.exports = router;