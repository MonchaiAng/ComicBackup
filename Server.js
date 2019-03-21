const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const database = {
	users: [
		{
	        id: '1',
	        name: 'Monchai',
	        password: 'cookies',
			email: 'got_loki@hotmail.com',
	        entries:0,
	        joined: new Date()
		},
		{
			id: '2',
	        name: 'Flim',
	        password: 'hansolo',
			email: 'flim@hotmail.com',
	        entries:0,
	        joined: new Date()
		}
	]
}
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
	res.send(database.users);
	// res.send('Welcome!5555');
});

app.post('/signin',(req,res)=>{
	if(req.body.email === database.users[0].email && 
		req.body.password == database.users[0].password){
		res.json('success');
	}else{
		res.status(400).json('pass kub');
	}
});

app.post('/register',(req,res) => {
	const { email, name, password } = req.body;
	database.users.push({
		id: '125',
		name: name,
		email: email,
        entries:0,
        joined: new Date()
	})
	res.json(database.users[database.users.length-1]);
})

// app.get('/:id', (req,res) => {
// 	const { id } = req.params;
// 	console.log(123);
// 	let found = false;
// 	database.users.forEach(user => {
// 		if(user.id === id) {
// 			found = true;
// 			return res.json(user);
// 		}
// 	})
// 	if (!found) {
// 		res.status(400).json('not found');
// 	}
// })

app.get('/signin',(req,res)=>{
	res.json('signin');
});

app.listen(3000,()=>{
	console.log('app is running on port 3000');
});