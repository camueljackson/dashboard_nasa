const express = require('express');
const cors = require('cors');

var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

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

app.post('/urls', (req, res) => {
	const newUser = req.body.user;
	mongo.connect(url, (err, client) => {
		var db = client.db('mytestingdb');
		db.collection('users').insert({ newUser }, function(err, result) {});
	});

	res.send(`I received your POST request. This is what you sent me: ${req.body.post}`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
