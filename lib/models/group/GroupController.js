var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
var Group = require('./Group');

// CREATES A NEW PROFILE
router.post('/', function (req, res) {
    Group.create({
            alias : req.body.alias
        }, 
        function (err, group) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(group);
        });
});

// RETURNS ALL THE PROFILE IN THE DATABASE
router.get('/', function (req, res) {
    Group.find({}, function (err, groups) {
        if (err) return res.status(500).send("There was a problem finding the group.");
        res.status(200).send(groups);
    });
});

// RETURNS ALL THE PROFILE IN THE DATABASE
router.get('/root', function (req, res) {
    Group.find({parent_id: {$exists: false}}, function (err, groups) {
        if (err) return res.status(500).send("There was a problem finding the group.");
        res.status(200).send(groups);
    });
});

// GETS A SINGLE PROFILE FROM THE DATABASE
router.get('/:id', function (req, res) {
    Group.findById(req.params.id, function (err, group) {
        if (err) return res.status(500).send("There was a problem finding the group.");
        if (!group) return res.status(404).send("No Group found.");
        res.status(200).send(group);
    });
});

// DELETES A PROFILE FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Group.findByIdAndRemove(req.params.id, function (err, group) {
        if (err) return res.status(500).send("There was a problem deleting the group.");
        res.status(200).send("Group: "+ group.alias +" was deleted.");
    });
});

// UPDATES A SINGLE PROFILE IN THE DATABASE
router.put('/:id', function (req, res) {
    Group.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, group) {
        if (err) return res.status(500).send("There was a problem updating the group.");
        res.status(200).send(group);
    });
});


module.exports = router;