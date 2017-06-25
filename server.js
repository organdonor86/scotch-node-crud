// Grab dependencies
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;

// Configure the application

// Set the route
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
})
