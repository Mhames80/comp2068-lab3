'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Nuclear Family' });
});
router.get('/yolanda/', function (req, res) {
    res.render('yolanda', { title: 'Yolanda' });
});
router.get('/matt/', function (req, res) {
    res.render('matt', { title: 'Matt' });
});
router.get('/mark/', function (req, res) {
    res.render('mark', { title: 'Mark' });
});
router.get('/chantel/', function (req, res) {
    res.render('chantel', { title: 'Chantel' });
});

module.exports = router;
