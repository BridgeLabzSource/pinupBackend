var express = require('express'),
    app = express(),
    router = express.Router(),
    admin = require('../model/adminregister');

router.post('/register', function(req, res) {
  var email = req.body.emailAddress;
    admin.create(req.body, function(err, user) {
        if (err) {
          console.log(err);
            res.send({
                "status": false,
                "message": "Admin registeration failed"
            })
        } else {
          console.log(user);
            res.json({
                success: true,
                message: 'Admin registerated successful'
            });
        }
    });

});

router.post('/register/domain',function(req,res){
  admin.findOne({
    emailAddress:req.body.emailAddress
  },function(err,user){

    if (!user) {
            res.json({
                authsuccess: false,
                description: 'User Authentication failed because user not found'
            });
          } else if (user) {
            if(req.body.subDomain == ""){
              res.send({
  "status": false,
  "message": "Domain name registerated failed"
})
            }else{
  var subdomainName = "/"+req.body.subDomain;
            var resSubdomain = {
                "success": true,
                "domainRedirection":subdomainName,
                "message": "Domain name registerated successful"

          }
    res.json(resSubdomain);
      }
     }
  });
});

module.exports = router;
