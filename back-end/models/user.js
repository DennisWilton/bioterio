const mongoose = require('mongoose'),
	  Schema   = mongoose.Schema;


mongoose.connect('mongodb://admin:admin123@ds123625.mlab.com:23625/bioterio-unic', { useNewUrlParser: true });


const userSchema = new Schema({
	username: String,
	password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;