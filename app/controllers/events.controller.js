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
  }
};
