var mongoose = require('mongoose'),
    extra = require('extra'),
    BaseSchema = require('base').BaseSchema;
  AbstractSchema = require('./abstract').BaseSchema;

var VisitorSchema = new AbstractSchema({
  visitorID: {
    type: Number,
    required : true,
    trim : true
  },
  visitCount : {type:Number},
  visitStartTime : {type:Date},
  device : {type:String},
  browser : {type:String},
  geoNetwork : {type: String},
  locationIP : {type: String},
  visitorReturning :{type:Boolean},
  userLink:{
    type : ObjectId,
    ref : 'User'
  },
});

var visitor = mongoose.model('Visitor', VisitorSchema);

module.exports = visitor;
