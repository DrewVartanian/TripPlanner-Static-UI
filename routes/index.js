var express = require('express');
var Promise = require('bluebird');
var router = express.Router();
var Place = require('../models').Place;
var Hotel = require('../models').Hotel;
var Activity = require('../models').Activity;
var Restaurant = require('../models').Restaurant;

/* GET home page. */
router.get('/', function(req, res, next) {
  var poiArr = [Hotel.find().exec(),
                Activity.find().exec(),
                Restaurant.find().exec()];

  Promise.all(poiArr).then(function(promiseFullfillmentArr){
    //promiseFullfillmentArr: and array of our promise response arrays
    res.render('index', { all_hotels: promiseFullfillmentArr[0],
                          all_activities: promiseFullfillmentArr[1],
                          all_restaurants: promiseFullfillmentArr[2] });
    console.log("Hi");
  }).catch(function(err){
    next(err);
  });
});

module.exports = router;
