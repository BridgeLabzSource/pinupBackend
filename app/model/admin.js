var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
	username: {
  	type: String,
  	required: true,
  	trim: true,
  	lowercase: true,
  	unique: true,
  	required:[true, '{PATH} is required.'], //match: /^[\w][\w\-\.]*[\w]$/i,
  	match : [
      	new RegExp('^[a-z0-9_.-]+$', 'i'),
      	'{PATH} \'{VALUE}\' is not valid. Use only letters, numbers, underscore or dot.'
  	],
  	minlength:5,
  	maxlength:60,
  	//validate: [
  	//  validators.isAlphanumeric(),
  	//  validators.isLength(2, 60)
  	//]
	},
	password: {
  	type: String,
  	required: false, // Only required if local
  	trim: true,
  	// match: new RegExp('^.{8,64}$'),
		// match: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})'),
		match: new RegExp('^([a-zA-Z+]+[0-9+]+[&@!#$%*+]+)$'),
  	//set: function(value) { // User can only change their password if it's a local account
  	//	if (this.local) {
  	//    	return value;
  	//	}
  	//	return this.password;
  	//}
	},
  emailAddress: {
    	type: String,
    	trim: true,
    	lowercase: true,
    	unique: true,
			match: new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
			// match: new RegExp('[a-z0-9][-a-z0-9_\+\.]*[a-z0-9])@([a-z0-9][-a-z0-9\.]*[a-z0-9]'),
// validate: [ validate.email, 'invalid email address' ]

  	}
  });

module.exports= mongoose.model('admin', adminSchema);
