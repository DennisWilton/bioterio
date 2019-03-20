const express = require('express');
const config = require('./config');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const jwt = require('jsonwebtoken');
const cors = require('cors');

const userModel = require('./models/user');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res)=> {
	res.json({
		message: config.application.author
	});
});

app.post('/auth/login', async (req, res) => {
	console.log("Uma nova requisição de login acabou de ser feita!");
	console.log(req.body);

	/*Verifica se reqbody está vazio*/
	const {username, password} = req.body;

	if(username == "" || password == ""){
		res.json({success: false, message: "Username and Password must be available!"});
		return false;
	}

	const users = await userModel.find({username, password}).exec();
	
	if( users.length == 1 ) { 
		const token = jwt.sign({ id: users[0]._id }, 'scret');
		res.json({success: true, token});
		return false;
	} else { 
		res.json({success: false, message: "Erro no login"})
		return false;
	}

	res.json({});


	console.log("Teste");

});


http.listen(config.port, _ => {
	console.info(`\n>> ${new Date()} <<\n>> Servidor rodando no endereço http://localhost:${config.port}/ <<\n`)
});