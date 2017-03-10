//
// Pipup Schema Base
//
var bcrypt = require('bcryptjs'),
    crypto = require('crypto'),
    mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator'),
    validate = require('mongoose-validate'),
    util = require('util');

require('mongoose-schema-jsonschema')(mongoose);

var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var AbstractSchema = function (){
    Schema.apply(this,arguments);
    this.add({
      isDeleted: {
        type: Boolean,
        default:false
      },
      createdAt :{
        type: Date
        
      },
      createdBy:{
        type : ObjectId,
        ref : 'admin'
      },
      updatedAt:{
        type: Date

      },
      updatedBy:{
        type : ObjectId,
        ref : 'admin'
      },
      deletedAt:{
        type: Date

      },
      deletedBy:{
        type : ObjectId,
        ref : 'admin'
      }
    });
};
util.inherits(AbstractSchema, Schema);

module.exports = {
  BaseSchema : AbstractSchema
};
