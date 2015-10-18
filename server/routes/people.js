var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/User.js');

/* GET people listing. */
router.get('/', function(req, res, next) {
        User.find(function (err, todos) {
                if (err) return next(err);
                res.json(todos);
                });
        });

/* GET /people/id */
router.get('/:id', function(req, res, next) {
        User.findById(req.params.id, function (err, post) {
                if (err) return next(err);
                res.json(post);
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
