// Grab dependencies
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;
  expressLayouts = require('express-ejs-layouts');

// Configure the application
// Tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

// Set ejs as our templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Set the routes
app.use(require('./app/routes'));


// Start the server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
})
