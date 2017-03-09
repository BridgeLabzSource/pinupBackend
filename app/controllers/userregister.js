var express = require('express'),
    app = express(),
    router = express.Router(),
    UserList= require('../model/userregister'),
    user = new UserList();


router.post('/register',function(req,res){
    console.log('inside save controller');
    var userData ={
    username:req.body.username,
    emailAddress:req.body.emailAddress
  }
    console.log(userData);
    // display saved user
     user.save(userData,function(error,data){
        if(error) {
            res.send(error)
        }
        else {
            res.send(data)
        }
    });
});



module.exports = router;
