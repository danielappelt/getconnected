var express = require('express');
var router = express.Router();

var User = require('../models/User.js');

/* GET people listing. */
router.get('/', function(req, res, next) {
    // TODO: Filter people by location and limit their number. For now, we fetch all.
    User.find({}, '_id nickname image_url hobbies online is_refugee', function (err, result) {
        if (err) { return next(err); }

        res.json(result);
    });
});

/* GET /people/id */
router.get('/:id', function(req, res, next) {
    // Don't output mail, pass, location, and updated_at
    User.findById(req.params.id, '-mail -pass -location -updated_at', function (err, result) {
        if(err) { return next(err); }

        res.json(result);
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
