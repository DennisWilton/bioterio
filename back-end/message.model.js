const mongoose = require('mongoose'),
	  Schema   = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/chat', {useNewUrlParser: true});

const msgSchema = new Schema({
	author: String,
	text: String,
}, {collection: 'messages'});

const Message = mongoose.model('Message', msgSchema);

module.exports = Message;