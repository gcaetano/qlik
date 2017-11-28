var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
var Profile = require('./Profile');

// CREATES A NEW PROFILE
router.post('/', function (req, res) {
    Profile.create({
            alias : req.body.alias
        }, 
        function (err, profile) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(profile);
        });
});

// RETURNS ALL THE PROFILE IN THE DATABASE
router.get('/', function (req, res) {
    Profile.find({}, function (err, profile) {
        if (err) return res.status(500).send("There was a problem finding the profile.");
        res.status(200).send(profile);
    });
});

// GETS A SINGLE PROFILE FROM THE DATABASE
router.get('/:id', function (req, res) {
    Profile.findById(req.params.id, function (err, profile) {
        if (err) return res.status(500).send("There was a problem finding the profile.");
        if (!profile) return res.status(404).send("No Profile found.");
        res.status(200).send(profile);
    });
});

// DELETES A PROFILE FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Profile.findByIdAndRemove(req.params.id, function (err, profile) {
        if (err) return res.status(500).send("There was a problem deleting the profile.");
        res.status(200).send("Profile: "+ profile.alias +" was deleted.");
    });
});

// UPDATES A SINGLE PROFILE IN THE DATABASE
router.put('/:id', function (req, res) {
    Profile.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, profile) {
        if (err) return res.status(500).send("There was a problem updating the profile.");
        res.status(200).send(profile);
    });
});


module.exports = router;