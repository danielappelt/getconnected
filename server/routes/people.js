var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/User.js');
var _ = require('lodash');

/* GET people listing. */
//TODO: Get People by Location, limited
router.get('/', function(req, res, next) {
        User.find(function (err, outp) {
                	if (err) return next(err);
					var preview = _.map(outp, function(usr){
						return{
							"_id":usr._id, 
							"image_url":usr.image_url, 
							"nickname":usr.nickname, 
							"online" : usr.online,
							"is_refugee" : usr.is_refugee
						};
					});
                res.json(preview);
                });
		});

/* GET /people/id */
router.get('/:id', function(req, res, next) {
        User.findById(req.params.id, function (err, outp) {
                if (err) return next(err);
                var detail = _.map(outp, function(usr){
						return{
							"_id":usr._id, 
							"image_url":usr.image_url, 
							"nickname":usr.nickname, 
							"online" : usr.online,
							"birthday" : usr.birthday,
							"gender" : usr.gender,
							"country": usr.country,
							"languages":usr.languages,
							"hobbies":usr.hobbies,
							"description":usr.description,
							"is_refugee" : usr.is_refugee
							//No Output of Mail, Pass, Location, Updated at
						};
					});
                res.json(detail);
                });
        });

/* PUT /people/:id */
router.put('/:id', function(req, res, next) {
        User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
                if (err) return next(err);
                res.json(post);
                });
        });

/* DELETE /people/:id */
router.delete('/:id', function(req, res, next) {
        User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
                if (err) return next(err);
                res.json(post);
                });
        });

module.exports = router;
