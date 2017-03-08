var express = require('express'),
    app = express(),
    router = express.Router(),
    user = require('../model/userregister');

router.post('/register', function(req, res) {
    user.create(req.body, function(err, user) {
        if (err) {
          console.log(err);
            res.send({
                success: false,
                message: 'User registerated failed'
            });
        } else {
            console.log(user);
            res.json({
                success: true,
                message: 'User registerated successful'
            });
        }
    });
});
// router.post('/register', function(req, res) {
//   var userData = new user({
//     username:req.body.username,
//     emailAddress:req.body.emailAddress
//   })
//   userData.save(function(error){
//     if(error){
//       res.send(error);
//     }else{
//       res.json({
//                       success: true,
//                       message: 'User registerated successful'
//                   });
//     }
//   });
// });
module.exports = router;
