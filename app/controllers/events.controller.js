module.exports = {

  // Show all events
  showEvents: (req, res) => {
      // Create dummy events
      const events = [
        {name: 'Basketball', slug: 'basketball', description: 'Throwing a ball into a basket.'},
        {name: 'Swimming', slug: 'swimming', description: 'Fish impressions.'},
        {name: 'Pipe Smoking', slug: 'pipesmoking', description: 'Smoke a pipe like.'}
      ];

      // Return a view with data
      res.render('pages/events', {events: events});
  },

  // Show a single event
  showSingle: (req, res) => {

    // Get a single event
    const event = { name: 'Swimming', slug: 'swimming', description: 'Fish Impressionzzz' };

    res.render('pages/single', {event: event});

  }

};
