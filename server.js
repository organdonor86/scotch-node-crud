// Grab dependencies
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;

// Configure the application

// Set the routes
app.use(require('./app/routes'));


// Start the server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
})
