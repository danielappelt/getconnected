/**
 * Created by makraus on 31/07/2015.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var details = require('./data/detail.json');
var _ = require('lodash');
var router = express.Router();              // get an instance of the express Router

router.get('/', function (req, res){
    res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/people/:id', function (req, res){
    var cat = _.find(details, { 'id': req.params.id});
    res.json(cat);
});

router.get('/people', function (req, res){
	var cat = _.map(details, function(user){
		return {"id":user.id, "image":user.image, "nickname": user.nickname, "online": user.online};s
});
    res.json(cat);
});

app.use('/api', router);
app.use(express.static(__dirname + '/data'));



var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
