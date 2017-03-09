var express = require('express');
var app = express();
var router = express.Router();
var adminData= require('../model/adminregister');
var admin = new adminData();


router.post('/signin',function(req,res){
   var login = {
        emailAddress: req.body.emailAddress,
        password: req.body.password
    };
    admin.findAll(login,function (err, data) {
        if (err) {
            res.send(err)
        }
        else {
            res.json(data)
        }
    });
});

module.exports = router;
