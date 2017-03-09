var express = require('express');
var app = express();
var router = express.Router();
var UserList= require('../model/userregister');
var user = new UserList();


router.post('/signin',function(req,res){
    var login = {
        emailAddress: req.body.emailAddress
    };
    user.findAll(login,function (err, data) {
        if (err) {
            res.send(err)
        }
        else {
            res.json(data)
        }
    });
});

module.exports = router;
