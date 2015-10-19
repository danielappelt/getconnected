var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');
var _ = require('lodash');

//PUT /register
router.put('/', function(req, res, next) {
			//TODO: Check Mail
			if(req.params.mail == null || req.params.pass == null || req.params.nickname == null){
				return next("Error: Not all required informations");
} else{
	User.create(req, function(err, usr){
		if(err) return next(err);
		console.log(usr);
		return next("Sucess");
});
}
});

module.exports = router;
