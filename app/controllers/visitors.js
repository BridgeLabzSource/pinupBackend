var express = require('express'),
    app = express(),
    useragent = require('express-useragent'),
    visit = require('../model/detail'),
    cookieParser = require('cookie-parser'),
    cookie = require('cookie'),
    Promise = require('promise');

var ID = [];

app.use(cookieParser("hello"));

exports.visitor = function(options) {
    return function(req, res, next) {

        console.log('test');
        SECRET = 'visitor';
        var visitorID = [];
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
        var data = {
                browser: resultJson["browser"],
                device: device
            }
        console.log(req, res, next);
        if (req.headers.cookie === undefined) {
            visit.savenow(data, function(error, data1) {
                if (error) {
                    //console.log(error)
                } else {
                    visitorID = data1._id;
                    //res.setHeader('Set-Cookie', "val");
                    //res.cookie("pincookie", visitorID);
                    console.log('cookie exists', req.headers.cookie);
                }
            });
            next();
        } else {
            // res.clearCookie('pincookie');
            // cookies.get('pincookie');
            // yes, cookiemodule.exports = visit; was already present
            console.log('cookie exists', req.headers.cookie);

            res.clearCookie('pincookie', {
                path: '/'
            })
            console.log(req.headers.cookie);

            visit.findId(data, function(err, data) {
                if (err) {
                    res.send(err)
                } else {
                    // console.log("data ",data);
                    for (var i = 0; i < data.length; i++) {
                        // console.log(data[i]);
                        visitorID[i] = data[i]._id;

                    }
                    cookiearray = req.headers.cookie.split(';');
                    for (var i = 0; i < cookiearray.length; i++) {
                        name = cookiearray[i].split('=')[0];
                        value = cookiearray[i].split('=')[1];
                        console.log("Key is : " + name + " and Value is : " + value);
                    }
                }
            });

        };
        //
        next();
    };
}
exports.ID = function(options) {
    return function(req, res, next) {
        console.log(ID);
    }
}
