var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');
var _ = require('lodash');
/**var strophe = require('../../lib/strophe.js');
var strophe_reg = require('../../lib/strophe-register.js');

//register callback XMPP
var callback = function (status, user, pass) {
    if (status === Strophe.Status.REGISTER) {
        // fill out the fields
        connection.register.fields.username =user;
        connection.register.fields.password = pass;
        // calling submit will continue the registration process
        connection.register.submit();
    } else if (status === Strophe.Status.REGISTERED) {
        console.log("registered!");
    } else if (status === Strophe.Status.CONFLICT) {
        console.log("Contact already existed!");
    } else if (status === Strophe.Status.NOTACCEPTABLE) {
        console.log("Registration form not properly filled out.")
    } else if (status === Strophe.Status.REGIFAIL) {
        console.log("The Server does not support In-Band Registration")
    } else if (status === Strophe.Status.CONNECTED) {
        // do something after successful authentication
    } else {
        // Do other stuff
    }
};
*/


//PUT /register
router.put('/', function(req, res, next) {
			//TODO: Check Mail
			if(req.params.mail === null || req.params.pass === null || req.params.nickname === null){
				return next("Error: Not all required informations");
} else{
    //REGEX Test
    if("/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i ".test(req.params.mail))  { 
        return next("Error: Not a valid Mailadress");
    }else{
        //User is being created in Database
	User.create(req, function(err, usr){
		if(err) return next(err);
		console.log(usr);
        //User is being registered in Chat XMPP 
        //connection.register.connect(chatserver, callback, wait, hold);
		return next("Sucess");
});}
}
});

module.exports = router;
