var express = require('express');
var router = express.Router();

router.get('/locale/en', function(req, res, next) {
    let locale = require('../lib/config/locales/en.json');
    res.status(200).send(locale);   
});

router.get('/locale/pt', function(req, res, next) {
    let locale = require('../lib/config/locales/pt.json');
    res.status(200).send(locale);
});


module.exports = router;
