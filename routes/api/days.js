var express = require('express')
var router = express.Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day');

//list of all days
router.get('/', function(req,res,next){
    Day.findAll()
    .then(function(alldays){
        res.json(alldays)
    })
})

//get a specific day
router.get('/:id', function(req,res,next){

})

//delete day
router.put('/:id', function(req,res,next){

})

//new day
router.post('/', function(req,res,next){
    console.log(req.body)
    Day.create(req.body)
    .then(function(newday){
        res.json(newday)
    })
    .catch(next)
})

//new attraction for day
router.post('/:id/:attraction', function(req,res,next){

})

 module.exports = router;
