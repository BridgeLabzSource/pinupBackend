var express = require('express');
var app = express();
var router = express.Router();
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var signin = require('../model/adminregister');
var config = require('../config');

app.set('superSecret', config.secret);
router.get('/',function(req,res){
signin.find({}, function (err, users) {
       res.json(users);
       console.log(users);
   });
});

router.post('/signin',function(req,res){
  console.log(req.body.emailAddress);
  signin.findOne({
    emailAddress:req.body.emailAddress
  },function(err,user){
    if(err) {  throw error; }
    if (!user) {
            res.json({
                authsuccess: false,
                description: 'User Authentication failed because user not found'
            });
          } else if (user) {
         //16b check if the received password matches with the data store
         if (user.password != req.body.password) {
             res.json({
                 authsuccess: false,
                 description: 'User Authentication failed because provided password is wrong.'
             });
         } else {
          
               var token = jwt.sign(user, app.get('superSecret'), {
					expiresIn: 86400 // expires in 24 hours
				});

             //send the response to the caller with the accesstoken and data
             console.log('Authentication is done successfully.....');

             //16d.
             res.json({
                 authsuccess: true,
                 description: 'Admin logging in Successfully',
                 token: token
             });
         }
     }
  });
});

module.exports = router;
