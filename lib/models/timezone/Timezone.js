var mongoose = require('mongoose');  

var TimezoneSchema = new mongoose.Schema({  
  value: {type: String, required: true} ,
  abbr: {type: String, required: true},
  isdst: {type: String, required: true},
  alias: {type: String, required: true},
  offset: { type: Number, required: true},
  utc: [{type: String}]
});

mongoose.model('Timezone', TimezoneSchema);

module.exports = mongoose.model('Timezone');