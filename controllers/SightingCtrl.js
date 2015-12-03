var Sighting = require('../models/Sighting.js');

module.exports = {
  read: function(req, res) {
    Sighting
    .find(req.query)
    .exec()
    .then(function(sightings) {
      res.status(200).send(sightings);
    });
  },
  create: function(req, res) {
    var sighting = new Sighting(req.body);
    sighting.save().then(function(err, result) {
      res.status(201).send(result);
    });
  },
  update: function(req, res) {
    Sighting.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if(!err) res.status(200).end();
    });
  },
  remove: function(req, res) {
    Sighting.remove({_id: req.params.id})
    .then(function(result) {
      return res.status(200).end();
    });
  }
};


// update: function(req, res) {
//     Sighting.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
//       if (err) return res.status(500).send(err);
//       else res.send(result);
//     });
//   },
