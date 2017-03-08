var express = require('express');
var app = express();
var router = express.Router();

var Categories = require('../model/topic');

router.post('/addtopic',function(req,res){
   Categories.create(req.body,function(err,result){
    if(err){
        res.send(err);
    }else{
      res.json(result);
      console.log(result);
    }
});
});

router.get('/addtopic',function(req,res){
   Categories.find({},function(err,result){
    if(err){
        res.send(err);
    }else{
      res.json(result);
      console.log(result);
    }
});
});

module.exports = router;
