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
		
		//addhistory start test
		app.post('/setep',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("epbook", (error, collection) => {
					collection.find({ _id: req.body.idSpecific }).toArray(function(err, document) { 
						res.json(document)
			            db.close();
			        });
			   });
			});
		}); 

		app.post('/addhistory',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("history", (error, collection) => {
					collection.insert([
			            { email: req.body.email, idEp: req.body.idSpecific, test:req.body.test,date: new Date() },
			        ], (error, result) => { 
			            db.close();
			        });
			   });
			});
		}); 

		app.post('/gethistory',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("history", (error, collection) => {
					collection.find({ email: req.body.email }).sort({date:-1}).limit(3).toArray(function(err, document) { 
						let arrayhistory = []
						for(let i=document.length-1;i>=0;i--){
							arrayhistory.push(document[i].test[0])
						}
						res.json(arrayhistory)
			            db.close();
			        });
			   });
			});
		}); 

		app.post('/getnumberhistory',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("history", (error, collection) => {
					collection.find({ email: req.body.email }).toArray(function(err, document) { 
						let arrayhistory = []
						for(let i=document.length-1;i>=0;i--){
							arrayhistory.push(document[i].idEp)
						}
						res.json(arrayhistory)
			            db.close();
			        });
			   });
			});
		}); 
		//end test
		app.post('/recommend',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
	    		db.collection("epbook", (error, collection) => {
					collection.find({tag:'Drama',_id:{$in:req.body.history1}}
					).toArray(function(err, document) {
						const a = document.length;
						collection.find({tag:'comedy',_id:{$in:req.body.history1}}).toArray(function(err, document) {
							const b = document.length;
							console.log(a)
							console.log(b)
								if(a>b){	

									console.log("drama")
									res.json("Drama")
								}else{
									console.log("comedy")
									res.json("comedy")
								}
							}); 
				   });
				});
			}); 
		}); 
		app.post('/getTypeRecommend',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
	    		db.collection("book", (error, collection) => {
	    			collection.find({'tag':'Drama'}).count()
	    			.then(data=> {
	    				let a = Math.floor(Math.random() * Math.floor(data));
	    				collection.find({tag:req.body.recommend}).skip(a).limit(1).toArray(function(err, document) {
							res.json(document);
				   		});
				    })
				});
			}); 
		}); 

		app.post('/ep',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("epbook", (error, collection) => {
					collection.findOne({ch:req.body.ch,id:req.body.id},function(err, document) {
						// console.log(document)
						res.json(document)
					}); 
			   });
			});
		}); 

		app.post('/favorites',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("favorites", (error, collection) => {
					collection.findOne({comic:req.body.comic,email:req.body.user},function(err, document) {
						if(document==null){
							res.json(0)
						}else{
							res.json(1)
						}
					}); 
			   });
			});
		}); 

		app.post('/addfavorite',(req,res) => {
			MongoClient.connect(url, (err, db) => { 
		    	db.collection("favorites", (error, collection) => {
					collection.insert([
			            { email: req.body.email, comic: req.body.comic },
			        ], (error, result) => { 
			            db.close();
			        });
			    })
	    	});
		});

		app.post('/findFavorites',(req,res) => {
			MongoClient.connect(url, (err, db) => { 
		    	db.collection("favorites", (error, collection) => {
					collection.find({email:req.body.email}).toArray(function(err, document) {
						if(document==""){
							res.json(0)
						}else{
							let arrayFavorites = [];
							for(let i =0;i<document.length;i++){
								arrayFavorites.push(document[i].comic)
							}
							res.json(arrayFavorites) 
						}
					}); 
			    })
	    	});
		});

		app.post('/findFavoritesUpdate',(req,res) => {
			MongoClient.connect(url, (err, db) => { 
		    	db.collection("epbook", (error, collection) => {
		    		// console.log(req.body.favoritesComic)
					collection.find({id:{$in:req.body.favoritesComic},
										created:{$gte:new Date(new Date().setHours(00,00,00)),
										$lt: new Date(new Date().setHours(23,59,59))}
									}).toArray(function(err, document) {
						res.json(document)
					}); 
			    })
	    	});
		});

		app.post('/removefavorite',(req,res) => {
			MongoClient.connect(url, (err, db) => { 
		    	db.collection("favorites", (error, collection) => {
					collection.remove(
			            { email: req.body.email, comic: req.body.comic },
			         (error, result) => { 
			            db.close();
			        });
			    })
	    	});
		});

		app.post('/epother',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("epbook", (error, collection) => {
					collection.find({id:req.body.id}).toArray(function(err, document) {
						// console.log(document)
						res.json(document)
					}); 
			   });
			});
		}); 

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

		app.post('/addcomment',(req,res) => {
			MongoClient.connect(url, (err, db) => { 
		    	db.collection("comment", (error, collection) => {
					collection.insert([
			            {  comic:req.body.comic, email: req.body.email,comment: req.body.comment, date: new Date() },
			        ], (error, result) => { 
			            db.close();
			        });
			    })
	    	});
		}); 

		app.post('/showcomment',(req,res) => {
			MongoClient.connect(url, (err, db) => { 
		    	db.collection("comment", (error, collection) => {
					collection.find({comic:req.body.comic}).sort({date:1}).toArray(function(err, document) {
						res.json(document)
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

		app.get('/sortbook',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("book", (error, collection) => {
					collection.find().sort({name:1})
						.toArray(function(err, document) {
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

		
		app.post('/allepbook',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("epbook", (error, collection) => {
    			console.log(req.body.idComic.id)
    			console.log(req.body.idComic)
    			let a = req.body.idComic.id;
    			if(a==undefined){
    				a = req.body.idComic;
    			}

				collection.find({id:a}).toArray(function(err, document) {
					console.log(document)
					res.json(document)
				}); 
			   });
			});
		}); 

		app.post('/history',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("user", (error, collection) => {
					collection.findOne({email:req.body.user},function(err, document) {
						res.json(document.history)
					}); 
			   });
			});
		}); 

		app.post('/history2',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("epbook", (error, collection) => {
					collection.find({_id:{$in:req.body.history1}}).toArray(function(err, document) {
						// console.log(document)
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
			            {$push:{ history:req.body.storehistory }},
			        ); 
			   });
			});
		}); 

		app.get('/topmanga',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("book", (error, collection) => {
					collection.find().sort({view:-1}).limit(3).toArray(function(err, document) {
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