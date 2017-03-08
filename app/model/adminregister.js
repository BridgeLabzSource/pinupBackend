var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    AbstractSchema = require('./abstract').BaseSchema;
var adminSchema = new AbstractSchema({
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
    password: {
        type: String,
        required: false, // Only required if local
        trim: true,
        match: new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/)
    },
    emailAddress: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        match: new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    }
});

module.exports = mongoose.model('admin', adminSchema);
