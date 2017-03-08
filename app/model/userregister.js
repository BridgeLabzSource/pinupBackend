var  mongoose = require('mongoose'),
    Schema = mongoose.Schema;

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

module.exports = mongoose.model('user', userSchema);
