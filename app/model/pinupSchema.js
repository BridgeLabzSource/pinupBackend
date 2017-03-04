var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pinupSchema = new Schema({
  pinupUrl:{
    type:String,
    required:true
  },
  timeStamp:{
    type:Number,
    required:true
  },
  pinupId:{
    type:Number,
    required:true
  },
  xtoken:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  imageUrl:{
    type:String,
    required:true
  },
  description:{
    type:String
  },
  tags:{
    type:String
  },
  topicId:{
    type:Number
  }
});

var pinUp = module.mongoose('pinup',pinupSchema);
module.exports = pinUp;
