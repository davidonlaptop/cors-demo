// Usage: node server1.js

var express = require('express');


/////////////////////////
// API APP
/////////////////////////

var API_PORT = 9999;

var POSTS = {
  "1": {'post': "First blog post"},
  "2": {'post': "Second blog post"},
  "3": {'post': "Third post"}
};

var apiApp = express();


apiApp.all("/*", function(req, res, next) {
  console.log("\n>> " + req.method + " http://" + req.headers.host + req.url);
  console.log( req.headers);
  next();
  console.log("<< ", res.statusCode + " " + res.statusMessage);
  console.log(JSON.parse(JSON.stringify(res.getHeaders())));
});


var corsFilter = function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');	// Allow pre-flight requests
  next();
};

// Un/comment this line to enable/disable CORS support
apiApp.use(corsFilter);

apiApp.use(express.static(__dirname));	// Serve static files from the same directory as this file

// Accepts any HTTP method
apiApp.all("/api/posts", function(req, res) {
  res.json(POSTS);
});

apiApp.listen(API_PORT, function() {
  console.log("Started API server at http://localhost:" + API_PORT);
});



/////////////////////////
// CLIENT APP
/////////////////////////

var CLIENT_PORT = 1111;

var clientApp = express();
clientApp.use(express.static(__dirname));       // Serve static files from the same directory as this file
clientApp.listen(CLIENT_PORT, function() {
  console.log("Started server at http://localhost:" + CLIENT_PORT);
});



