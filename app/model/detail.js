var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    util = require("util"),
    EventEmitter = require("events").EventEmitter,
    abstractSchema = require('./abstract').BaseSchema;


var visitorSchema = new abstractSchema({
    device: String,
    browser: String,
    date: Date
        // reocuuringCount : Number
});

if (!visitorSchema.options.toObject) visitorSchema.options.toObject = {};
visitorSchema.options.toObject.transform = function(doc, ret, options) {
    // remove the _id of every document before returning the result
    ret.visitorID = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
};

var visit = mongoose.model('visit', visitorSchema);

function Details() {
    EventEmitter.call(this);
}

util.inherits(Details, EventEmitter);

Details.prototype.savenow = function(data, cb) {
    var visitors = new visit(data);
    visitors.save(function(error, result) {
        if (error) {
            return cb(error, null)
        } else if (data) {
            return cb(null, result);
        }
    });
};

Details.prototype.findId = function(data, cb) {
    // var visitors = new visit(data);
    visit.find({}, function(error, result) {
        if (error) {
            return cb(error, null)
        } else if (data) {
            return cb(null, result);
        }
    });

};


module.exports = new Details;
