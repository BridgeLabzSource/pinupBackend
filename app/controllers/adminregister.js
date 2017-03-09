var express = require('express'),
    app = express(),
    router = express.Router(),
    adminData = require('../model/adminregister');
    admin = new adminData();
// router.post('/register', function(req, res) {
//   var email = req.body.emailAddress;
//     admin.create(req.body, function(err, user) {
//         if (err) {
//           console.log(err);
//             res.send({
//                 "status": false,
//                 "message": "Admin registeration failed"
//             })
//         } else {
//           console.log(user);
//             res.json({
//                 success: true,
//                 message: 'Admin registerated successful'
//             });
//         }
//     });
//
// });

router.post('/register',function(req,res){
    console.log('inside save controller');
    var adminDetails ={
        username:req.body.username,
        password:req.body.password,
        emailAddress:req.body.emailAddress
    }
    console.log(adminDetails);
    // display saved user
    admin.save(adminDetails,function(error,data){
        if(error) {
            res.send(error)
        }
        else {
            res.json(data)
        }
    });
});

router.post('/register/domain',function(req,res) {
    console.log('inside save controller');
    var domain;
    domain = {
        emailAddress: req.body.emailAddress,
        subDomain: req.body.subDomain
    };
    console.log(domain);
    admin.find(domain,function (err, data) {
        if (err) {
            res.send(err)
        }
        else {
            console.log(data);
            res.json(data)
        }
    });
});


module.exports = router;
