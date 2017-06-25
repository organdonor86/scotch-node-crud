// Create a new express router
const express = require('express'),
  router = express.Router();
  mainController = require('./controllers/main.controller');
  eventsController = require('./controllers/events.controller');

// Export router
module.exports = router;

// Define routes
router.get('/', mainController.showHome);

// Event routes
router.get('/events', eventsController.showEvents);
router.get('/events/:slug', eventsController.showSingle);
