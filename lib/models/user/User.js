var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
    timezone: { type: Schema.Types.ObjectId, ref: 'Timezone' },
    language: { type: Schema.Types.ObjectId, ref: 'Language' },
    group: { type: Schema.Types.ObjectId, ref: 'Group' }

});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');