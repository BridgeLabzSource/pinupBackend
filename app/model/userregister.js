var express = require('express');
var app = express();
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var  mongoose = require('mongoose'),
    Schema = mongoose.Schema
, util = require("util")
    , EventEmitter = require("events").EventEmitter,
 config = require('../config');

app.set('superSecret', config.secret);


var userSchema = new Schema({
  username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, '{PATH} is required.'], //match: /^[\w][\w\-\.]*[\w]$/i,
      match: [
          new RegExp('^[a-z0-9_.-]+$', 'i'),
          '{PATH} \'{VALUE}\' is not valid. Use only letters, numbers, underscore or dot.'
      ],
      minlength: 5,
      maxlength: 60
  },

    emailAddress: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        match: new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    }
});

var user = mongoose.model('user', userSchema);

function UserList() {
    EventEmitter.call(this);
}

util.inherits(UserList, EventEmitter);

UserList.prototype.save = function (userData, cb) {
var userDetails = new user(userData);
    userDetails.save(function (error, data) {
        if (error) {
            return cb({
                      success: false,
                      message: 'User registerated failed'
                  },null)
        }else if(data){
      return cb(null,{
                      success: true,
                      message: 'User registerated successful'
                  });
    }
  });

};

UserList.prototype.findAll = function(login, cb) {

    user.findOne({
        emailAddress:login.emailAddress
    },function(err,user) {

        if (!user) {

            return cb(null, {
                authsuccess: false,
                description: 'User Authentication failed because user not found'
            });
        } else if (user) {
console.log(user);
            var token = jwt.sign(user, app.get('superSecret'), {
                expiresIn: 86400 // expires in 24 hours
            });
            return cb({
                authsuccess: true,
                description: 'User logging in Successfully',
                token: token
            });
        }
    });
};





module.exports = UserList;
