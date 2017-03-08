var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
	title : String
});


var Categories = mongoose.model('categories', CategorySchema);
module.exports = Categories;
