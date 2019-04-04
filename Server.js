const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://localhost:27017/comic';

app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));


        // collection.insertMany([
        //     {  name: 'Bob', age: 24 },
        //     {  name: 'john', age: 30 }
        // ], (error, result) => {  
        //     db.close();
        // });
		app.post('/signin',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("user", (error, collection) => {
				collection.findOne({email:req.body.email,password:req.body.password},function(err, document) {
					if(document !== null){	
				  		res.json('success');
				  	}
				  	else{
				  		res.status(400).json('pass kub');
				  	}  
				}); 
			   });
			});
		}); 
 	
		app.post('/register',(req,res) => {
			MongoClient.connect(url, (err, db) => { 
		    	db.collection("user", (error, collection) => {
					collection.insert([
			            {  email: req.body.email, name: req.body.name, password: req.body.password, date: new Date() },
			        ], (error, result) => { 
			            db.close();
			        });
			    })
	    	});
		}); 
 
		app.get('/book',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("book", (error, collection) => {
					collection.find()
						.toArray(function(err, document) {
						// console.log(document);
						res.json(document)
					}); 
			   });
			});
		});  

		app.get('/epbook',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("epbook", (error, collection) => {
					collection.find({created:{$gte:new Date(new Date().setHours(00,00,00)),
											$lt: new Date(new Date().setHours(23,59,59))}})
						.toArray(function(err, document) {
						res.json(document)
					}); 
			   });
			});
		}); 

		app.get('/allepbook',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("epbook", (error, collection) => {
					collection.find()
						.toArray(function(err, document) {
						// console.log(document);
						res.json(document)
					}); 
			   });
			});
		}); 

		app.post('/history',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("user", (error, collection) => {
					collection.findOne({email:req.body.user},function(err, document) {
						res.json(document.history[0])
					}); 
			   });
			});
		}); 

		app.post('/history2',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("epbook", (error, collection) => {
					collection.find({_id:req.body.history1}).toArray(function(err, document) {
						console.log(req.body.history1);
						res.json(document)
					}); 
			   });
			});
		}); 

		app.post('/storehistory',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("user", (error, collection) => {
					collection.update(
						{ "email": req.body.user},
			            {$set:{ history:req.body.storehistory }},
			        ); 
			   });
			});
		}); 

		app.get('/topmanga',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("book", (error, collection) => {
					collection.find().sort({view:-1}).limit(3).toArray(function(err, document) {
						// console.log(document);
						res.json(document) 
					}); 
			   });
			});
		});

			// database.users.push({
			// 	id: '125',
			// 	name: name,
			// 	email: email,
		 //        entries:0,
		 //        joined: new Date()
			// })
			// res.json(database.users[database.users.length-1]);
		


  //       collection.find({name: 'rok'}).toArray(function(err, document) {
		//   console.log(document);
		// });

		// app.get('/',(req,res)=>{
		// 	res.send(database.users);
		// 	// res.send('Welcome!5555');
		// });



 






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