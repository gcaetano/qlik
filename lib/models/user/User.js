var mongoose = require('mongoose');  
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({  
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  profile: {type: Schema.Types.ObjectId, ref: 'Profile'},
  timezone: {type: Schema.Types.ObjectId, ref: 'Timezone'},
  language: {type: Schema.Types.ObjectId, ref: 'Language'},
  group: {type: Schema.Types.ObjectId, ref: 'Group'}
  
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');