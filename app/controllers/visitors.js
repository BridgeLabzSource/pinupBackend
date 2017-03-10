var cookieSession = require('cookie-session');
var express = require('express');
var app = express();
var useragent = require('express-useragent');
var visit = require('../model/detail');

app.use(cookieSession({
  secret: 'secret',
  signed: true,
}));

module.exports = function(options) {
    return function(req, res, next) {
        var source = req.headers['user-agent'];
        // console.log(typeof useragent.getBrowser);
        var agent = useragent.parse(source);
        // console.log(agent);
        // console.log(JSON.stringify(useragent.parse(source)));

        var device;
        var array1 = ["isMobile", "isTablet", "isiPad", "isiPod", "isiPhone", "isDesktop","isMac","isSamsung"];
        var resultJson = useragent.parse(source);
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
        // console.log(resultJson["browser"]);
        var data = {
          browser : resultJson["browser"],
          device : device
        }
        console.log(data);
        visit.savenow(data,function(error,data1){
           if(error) {
               console.log(error)
           }
           else {
             console.log(data1);
               console.log("data")
           }
         })
    
        //   cookie()
        //   if (true) {
        //     findby cookie(){
        //       visitorid
        //       update count
        //     }
        //
        //   }else{
        //   cookie save
        //   save("visitor"){
        //
        //   }
        // }
        // res.send(buseragent.parse(source));
        next();
    }
    return (data);
}
