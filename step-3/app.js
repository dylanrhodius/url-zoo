const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
	originalUrl: { type: String, required: true },
	shortUrl: String
});

const Url = mongoose.model('Url', urlSchema);

//Save the current PORT to use dynamically within the server
const port = process.env.PORT || 3000;
const domain = process.env.APP_DOMAIN || 'localhost'

/**
 * Create Express server.
 */
const app = express();

/**
 * Register Express middleware
 *  - bodyParser: allows us to access the request body of route requests
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Configure Mongoose and connect to MongoDB
 */
mongoose.Promise = global.Promise;
try {
	mongoose.connect('mongodb://localhost/mern_tutorial');
	console.log('connected to mongoDB');
} catch (e) {
	console.log('ERROR: could not connect to mongoDB. Is it running? (use `mongod`)');
	process.exit(1);
}

app.use('/assets', express.static(path.resolve('step-3/assets'), { maxAge: '30 days' }));

app.get('/urls', (req, res) => {
	Url.find((err, urls) => {
		if (err) return res.status(500).send(err);
//
		res.send(urls);
	});
});

app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});

//Redirecting from shortUrl address to database's originalUrl
app.get('/:shortUrl', (req, res) => {
	console.log("get /shortUrl")
  let url = "http://"+domain+"/" + req.params.shortUrl +"/"
	console.log(url);
	Url.find( { shortUrl: url }, function(err, entries) {
		if(err) {
			res.status(404).json({"error": "not found", "err":err});
			return;
		} else {
			console.log(entries);
			console.log(entries[0].originalUrl);
			res.redirect(`${entries[0].originalUrl}`)

		}
	});
});

// Creating new entries
app.post('/urls', (req, res) => {
	// Check to see if the entry sent over already exists in DB
	Url.count({originalUrl: `${req.body.originalUrl}`}, function (err, count) {
		// If it doesn't exist count should be 0, so add entry to DB
		if (count === 0) {
			// Make a newUrl variable with the body of the request
			const newUrl = new Url(req.body);
			// Add domain details to randomly generatedUrl
			newUrl.shortUrl = "http://"+domain+"/"+`${newUrl.shortUrl}`+"/"
			newUrl.save((err, url) => {
				if (err) return res.status(500).send(err);

				res.send(url);
			});
		}
	});
});

/**
 * default route: send html
 */
app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

/**
 * Start server
 */
const server = app.listen('3000', function() {
  console.log(`Server running on http://${domain}, port ${port}`)
});
