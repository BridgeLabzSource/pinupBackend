var express = require('express'),
    app = express(),
    useragent = require('express-useragent'),
    visit = require('../model/visitors'),
    cookieParser = require('cookie-parser'),
    cookie = require('cookie'),
    Promise = require('promise');
    var Q = require('q');
    // var Q2 = require('q');

    exports.visitor = function(options) {
        return function(req, res, next) {
          var x=req.body;
             console.log(x);
             var source = req.headers['user-agent'];
       var agent = useragent.parse(source);
       var device;
       var array1 = ["isMobile", "isTablet", "isiPad", "isiPod", "isiPhone", "isDesktop", "isMac", "isSamsung"];
       var resultJson = useragent.parse(source);
       // console.log(useragent.parse(source));
       var flag = false,
           i = 0;
       while (!flag) {
           if (resultJson[array1[i]]) {
               if (array1[i] == "isDesktop" || array1[i] == "isMac") {
                   // console.log("Desktop");
                   device = "Desktop";
               } else {
                   // console.log("Mobile");
                  device = "Mobile";
               }
               flag = true;
           }
           i++;
       }
       var a = {
               browser: resultJson["browser"],
               device: device
           }
             //var a=req.params.obj;
             //var month=req.body;
             //console.log(date);
             //console.log("pan:");
             console.log(a);
             function doQuery1() {
                 var defered = Q.defer();
                 visit.savenow(a,function (err, data) {
                     if (err) {
                         res.send(err);
                     }
                     else {
                          console.log(data);
                       if(req.headers.cookie === undefined){
                         console.log(data._id);

                         var visitorID = data._id;
                         console.log('visitor' + visitorID);
                        res.cookie('hie-Cookie', visitorID);
                        console.log('hii');
                        console.log('hh' , req.headers);
                       }
                       else {
                         console.log('cookie exists');
                           console.log('hh' , req.headers);
                       }

                         console.log('save');
                        //  console.log(data);
                         //res.send(data);
                         defered.resolve(data);

                     }
                 });
                 return defered.promise;
             }


             console.log('aaaaaa');
             Q.all([doQuery1()]).then(function (results) {
                 console.log('and');

                //  res.send(results);
                 //cb(null,c);
         });
          next();
        }
      }
