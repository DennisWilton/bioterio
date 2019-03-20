const Message = require('./message.model.js');

const messageController = {

	loadMessages: async function(){
		console.log(`>> Messenger: Carregando mensagens anteriores...`);
		let messages = await Message.find();
		return messages;
	},

	sendMessage: async function(data){
		console.log(`>> Messenger: Enviando mensagem...`);
		let message = new Message({ author: data.author, text: data.text });
		message.save();
	}

}

module.exports = messageController;