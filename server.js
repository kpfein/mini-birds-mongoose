var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Bird = require('./models/Sighting.js');
var SightingCtrl = require('./controllers/SightingCtrl.js');

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/sighting', SightingCtrl.create);
app.get('/api/sighting', SightingCtrl.read);
app.put('/api/sighting/:id', SightingCtrl.update);
app.delete('/api/sighting/:id', SightingCtrl.remove);



app.listen(8888);

mongoose.connect('mongodb://localhost/mongoose-basic-api');
