var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
var Timezone = require('./Timezone');

// CREATES A NEW TIMEZONE
router.post('/', function (req, res) {
    Timezone.create({
            alias : req.body.alias,
            value : req.body.value,
            abbr : req.body.abbr,
            isdst : req.body.isdst,
            offset: req.body.offset,
            utc: req.body.utc
        }, 
        function (err, timezone) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(timezone);
        });
});

// RETURNS ALL THE TIMEZONE IN THE DATABASE
router.get('/', function (req, res) {
    Timezone.find({}, function (err, timezone) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(timezone);
    });
});

// GETS A SINGLE TIMEZONE FROM THE DATABASE
router.get('/:id', function (req, res) {
    Timezone.findById(req.params.id, function (err, timezone) {
        if (err) return res.status(500).send("There was a problem finding the Timezone.");
        if (!timezone) return res.status(404).send("No Timezone found.");
        res.status(200).send(timezone);
    });
});

// DELETES A TIMEZONE FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Timezone.findByIdAndRemove(req.params.id, function (err, timezone) {
        if (err) return res.status(500).send("There was a problem deleting the Timezone.");
        res.status(200).send("Timezone: "+ timezone.alias +" was deleted.");
    });
});

// UPDATES A SINGLE TIMEZONE IN THE DATABASE
router.put('/:id', function (req, res) {
    Timezone.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, timezone) {
        if (err) return res.status(500).send("There was a problem updating the timezone.");
        res.status(200).send(timezone);
    });
});


module.exports = router;