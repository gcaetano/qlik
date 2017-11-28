var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
    alias: { type: String, required: true }
});

mongoose.model('Profile', ProfileSchema);

module.exports = mongoose.model('Profile');