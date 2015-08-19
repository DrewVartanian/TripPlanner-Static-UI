'use strict';
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost/trip-planner')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));


var activitySchema = new mongoose.Schema({
	address,
	city,
	state, 
	phone

})
