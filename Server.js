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
		
		app.post('/findidspecific',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("epbook", (error, collection) => {
    			// console.log("findidspecific")
    			// console.log(req.body.id)
    			// console.log(req.body.ch)
					collection.findOne({ id: req.body.id,ch:req.body.ch},function(err, document) { 
						// console.log(document._id)
						res.json(document._id)
			            db.close();
			        });
			   });
			});
		}); 
		//getName 
		app.get('/getname',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("book", (error, collection) => {
					collection.find().toArray(function(err, document) {
						let arrayname = []
						for(let i=0;i<document.length;i++){
							arrayname.push(document[i].name)
						} 
						
						res.json(arrayname)
			            db.close();
			        });
			   });
			});
		}); 
		//getpages
		app.post('/getpages',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("epbook", (error, collection) => {
					collection.findOne({ id: req.body.id,ch:req.body.ep},function(err, document) { 
						res.json(document.allpages)
			            db.close();
			        });
			   });
			});
		}); 
		//addhistory start test
		app.post('/setep',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("epbook", (error, collection) => {
					collection.findOne({ ch:req.body.ch,id:req.body.id},function(err, document) { 
						// console.log(document)
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
			        	res.json(result)
			        	db.close();
			        });
			   });
			});
		}); 

		app.post('/addview',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("book", (error, collection) => {
    			collection.findOne({_id:req.body.id},function(err, document) {
    				let plusOne = document.view+1
    				collection.update(
						{ "_id": req.body.id},
			            { $set:{view: plusOne }},
			        ); 
			        res.json(document)
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
							arrayhistory.push(document[i].test)
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
						collection.find({tag:'Romantic',_id:{$in:req.body.history1}}).toArray(function(err, document) {
							const b = document.length;
							collection.find({tag:'Fantacy',_id:{$in:req.body.history1}}).toArray(function(err, document) {
								const c = document.length;
								collection.find({tag:'Adventure',_id:{$in:req.body.history1}}).toArray(function(err, document) {
								const d = document.length;
								collection.find({tag:'Sport',_id:{$in:req.body.history1}}).toArray(function(err, document) {
									const e = document.length;
									collection.find({tag:'Mysterious',_id:{$in:req.body.history1}}).toArray(function(err, document) {
										const f = document.length;
											const Havehistory = a>2 || b>2 || c>2 || d>2 || e>2 || f>2
											if(Havehistory){
												if(a>=b && a>=c && a>=d && a>=e && a>=f){	
													res.json("Drama")
												}else if(b>=a && b>=c && b>=d && b>=e && b>=f){
													res.json("Romantic")
												}else if(c>=a && c>=b && c>=d && c>=e && c>=f){
													res.json("Fantacy")
												}else if(d>=a && d>=b && d>=c && d>=e && d>=f){
													res.json("Adventure")
												}else if(f>=a && f>=b && f>=c && f>=d && f>=e){
													res.json("Sport")
												}else{
													res.json("Mysterious")
												}
											}else{
												res.json("Topview")
											}

										});
									});
								});
							});
						}); 
				   });
				});
			}); 
		}); 
		
		app.post('/getTypeRecommend',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
	    		db.collection("book", (error, collection) => {
	    			collection.find({tag:req.body.recommend}).count()
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
				  		res.json('failed')
				  		// res.status(400).json('pass kub');
				  	}  
				}); 
			   });
			});
		}); 
 	
		app.post('/register',(req,res) => {
			MongoClient.connect(url, (err, db) => { 
		    	db.collection("user", (error, collection) => {
		    		collection.findOne({email: req.body.email},function(err, document){
		    			if(document == null){
			    			collection.insertOne(
				            	{  email: req.body.email, name: req.body.name, password: req.body.password, date: new Date() }
				        	) 
				        	res.json('success')
		    			}else{
		    				res.json('failed')
		    			}
		    		});
			    });
	    	});
		}); 

		app.post('/addcomment',(req,res) => {
			MongoClient.connect(url, (err, db) => { 
		    	db.collection("comment", (error, collection) => {
		    		collection.findOne({comic:req.body.comic, email: req.body.email,comment: req.body.comment},function(err, document){
		    			console.log(document)
		    			if(document == null){
			    			collection.insertOne(
					            {  comic:req.body.comic, email: req.body.email,comment: req.body.comment, date: new Date() },
					        );
					        res.json('success')
		    			}
		    		})

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
    			// console.log(req.body.idComic.id)
    			// console.log(req.body.idComic)
    			let a = req.body.idComic.id;
    			if(a==undefined){
    				a = req.body.idComic;
    			}

				collection.find({id:a}).sort({created:-1}).toArray(function(err, document) {
					// console.log(document)
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

		app.get('/nohistory',(req,res)=>{
			MongoClient.connect(url, (err, db) => { 
    		db.collection("book", (error, collection) => {
					collection.find().sort({view:-1}).limit(1).toArray(function(err, document) {
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