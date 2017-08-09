const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const firebase = require('firebase');
require('firebase/auth');
require('firebase/database');

const blogs = require('./routes/blogs');
const searches = require('./routes/searches');
const sorts = require('./routes/searches');
const index = require('./routes/index');

// Firebase config
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const app = express();
const port = process.env.PORT || 8080;

// Set static folder. This allows express to serve all static files
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(express.static(path.join(__dirname, 'client/images')));

// Let express render html files (404 page, etc.)
app.engine('html', require('ejs').renderFile);

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use('/blogs', blogs);
app.use('/searches', searches);
app.use('/sorts', sorts);
app.use('/*', index);

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});