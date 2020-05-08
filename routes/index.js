var express = require('express');
var router = express.Router();
var model = require('../model')
/* GET home page. */
router.get('/', function(req, res, next) {
  model.connect(function(db) {
    db.collection('users').find().toArray(function(arr,docs) {
      console.log('ddd'+docs)
    })
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
