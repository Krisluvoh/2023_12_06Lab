// Importing express module
const express = require('express');


const app = express();

// A route for the root URL
app.get('/', (req, res) => {
  res.send('Hello!');
});

// A route for the /greeting URL
app.get('/greeting', (req, res) => {
  res.send('Hello, stranger');
});

// A route for the /greeting/:name URL 
app.get('/Hello/:firstName', function(req, res) {
  console.log(req.params);
  console.log(req.query);
  res.send('hello ' + req.query.title + ' ' + req.params.firstName);
});

// Set the server to port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


