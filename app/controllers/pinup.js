var express = require('express');
var app = express();
var router = express.Router();
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

var pinUp = require('../model/pinupSchema');
var SECRET = 'shhhhhhared-secret';
app.use('/api', expressJwt({secret: SECRET}));
////////////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/addPinup',function(req,res){
  console.log(req.body);
   pinUp.create(req.body,function(err,user){
     var token = jwt.sign(user, SECRET, { expiresIn: 18000 });
     pinupUrl=req.body.pinupUrl;
     timeStamp=Math.floor(new Date() / 1000);
     xtoken=token;

    if(err){
        res.send({

            "status": "false",
            "message": [
              "Pinup addition failure",
              "Pinup url already exists"
            ],
            "timeStamp": timeStamp,
            "pinupData": [
              {
                "link": link
              }
            ],
            "token": xtoken

});
    }else{

      res.json({
        "success": "true",
        "message": 'Pinup added successfully',
        "timeStamp":timeStamp,
        "pinupData": [
    {
      "link": link,
      "title": title
    }
  ],
        "token": xtoken
      });
    }
});
});
/////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/editPinup',function(req,res){
  console.log(req.body);
   pinUp.create(req.body,function(err,user){
     var token = jwt.sign(user, SECRET, { expiresIn: 18000 });

    if(err){
        res.send({

            "status": "false",
            "message": [
              "Failure in fetching the Pinup data",
    "Pinup Identifier (ID) not set, Pinup Indentifier cannot be blank",
    "Invalid Pinup Identifier (ID), Pinup Identifier doesn't exists"
            ],
            "timeStamp": timeStamp,
            "pinupData": [
              {
                "link": link
              }
            ],
            "token": xtoken

});
    }else{

      res.json({
        "success": "true",
        "message": 'Pinup data fetched Successfully',
        "timeStamp":timeStamp,
        "pinupData": [
    {
      "link": "https://www.tutorialspoint.com/angular2/angular2_services.htm",
      "title": "Angular2 Services",
      "imageUrl": "https://www.tutorialspoint.com/angular2/images/angular2-mini-logo.jpg",
      "topic": "tech",
      "description": "Services are JavaScript functions that are responsible for doing a specific task only. Angular services are injected using Dependency Injection mechanism and include the value, function or feature which is required by the application. There nothing much about service in Angular and there is no ServiceBase class, but still services can be treated as fundamental to Angular application.",
      "tags": "Angular 2, Tutorial, Overview, Environment, Hello World, Architecture, Modules, Components, Templates, Metadata, Data Binding, Data Display, User Input, Forms, Services, Directives, Dependency Injection.",
      "creationDate": timeStamp,
      "mainLInk": mainLink,
      "liked": 10,
      "unliked": 5,
      "views": 40
    }
  ],
        "token": token
      });
    }
});
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/removePinup',function(req,res){
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/updatePinup',function(req,res){
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/getRecentPinup',function(req,res){
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
///////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/updatePinupTopic',function(req,res){
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
