var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    username:'string',
    password:'string',
    email:'string'
});

module.exports = mongoose.model('User', UserSchema);