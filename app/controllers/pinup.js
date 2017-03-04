var express = require('express');
var app = express();
var router = express.Router();
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

var admin = require('../model/pinupSchema');
var SECRET = 'shhhhhhared-secret';
app.use('/api', expressJwt({secret: SECRET}));

router.post('/addPinup',function(req,res){
  console.log(req.body);
   pinUp.create(req.body,function(err,user){
     var token = jwt.sign(user, SECRET, { expiresIn: 18000 });
    if(err){
        res.send({

            "status": false,
            "message": [
              "Pinup addition failure",
              "Pinup url already exists"
            ],
            "timeStamp": 1487844504000,
            "pinupData": [
              {
                "link": "https://www.tutorialspoint.com/angular2/angular2_services.htm"
              }
            ],
            "token": token

});
    }else{

      res.json({
        "success": true,
        "message": 'Pinup added successfully',
        "timeStamp":1487844504000,
        "pinupData": [
    {
      "link": "https://www.tutorialspoint.com/angular2/angular2_services.htm",
      "title": "Angular2 Services"
    }
  ],
        "token": token
      });
    }
});
});
module.exports = router;
