var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var chatserver = "chatme.im";

//var routes = require('./routes/index');
var register = require('./routes/register');


var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/getconnected', function(err) {
    // Please note that this will get called asynchronously. Only
    // initialize the app once we know that we have a connection (or not).
    var people;

    if (err) {
        console.log('connection error', err);
        console.log('falling back to static data');

        var _ = require('lodash');
        var details = require('./data/detail.json');

        // Let people router work on static file data/detail.json
        people = express.Router();

        people.get('/', function (req, res) {
            var cat = _.map(details, function(user) {
                return {
                    "_id":user._id,
                    "image_url":user.image_url,
                    "nickname": user.nickname,
                    "online": user.online
                };
            });
            res.json(cat);
        });

        people.get('/:id', function (req, res) {
            var cat = _.find(details, {'id': req.params.id});
            res.json(cat);
        });
    } else {
        console.log('connection successful');
        people = require('./routes/people');
    }

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    app.use(express.static(path.join(__dirname, 'public')));
    // Serve the front end mockup via /
    app.use(express.static(path.join('..', 'frontend')));
    // Serve the api via /api/..
    app.use('/api/people', people);
	app.use('/api/register', register);

    // catch 404 and forward to error handler - do this only after
    // regular use definitions.
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
});

module.exports = app;


/**var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});*/

