const mongodb = require ('mongodb');
const MongoClient = mongodb.MongoClient;
const { users } = require ("./16.1-blog_schem.js");
const { more_comments } = require ("./16.1-blog_schem.js");

const connectionURL = "mongodb://127.0.0.1:27017";
const dbName = "exercise-16_2-blogs";

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
	if (error) {
		return console.error(error);
	}	

	const db = client.db(dbName);
	
	try {
		db.collection("users").insertMany(users)
		.then(() => {
			console.log("users collection success");
		});

		db.collection("more_comments").insertMany(more_comments)
		.then(() => {
			console.log("more_comments collection success");
		});

	} catch (error) {
		console.error(error);
	}

})



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// // npm i mongo

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "Company Inc123", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

// // var MongoClient = require('mongodb').MongoClient;
// // var url = "mongodb://localhost:27017/";

// // MongoClient.connect(url, function(err, db) {
// //   if (err) throw err;
// //   var dbo = db.db("mydb");
// //   dbo.collection("customers").findOne({}, function(err, result) {
// //     if (err) throw err;
// //     console.log(result.name);
// //     db.close();
// //   });
// // });