var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GroupSchema = new Schema({
    alias: { type: String, required: true }
});

mongoose.model('Group', GroupSchema);

module.exports = mongoose.model('Group')

