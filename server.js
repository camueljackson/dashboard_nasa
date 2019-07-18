const express = require('express');
const cors = require('cors');

var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mytestingdb';

const app = express();

app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
	})
);

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/messages', (req, res) => {
	// let messagesArray = [];
	// mongo.connect(url, async (err, client) => {
	// 	var db = client.db('mytestingdb');
	// 	const messages = await db.messages.find({ type: 'message' });
	// 	console.log(messages);
	// });

	// return messagesArray;

	mongo.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db('mytestingdb');
		dbo.collection('messages')
			.find()
			.toArray(function(err, result) {
				if (err) throw err;
				console.log(result);
				db.close();
			});
	});
});

app.post('/messages', (req, res) => {
	const message = req.body.newMessage;
	mongo.connect(url, (err, client) => {
		var db = client.db('mytestingdb');
		db.collection('messages').insertOne({ message }, function(err, result) {});
	});
	res.send('message Received!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
