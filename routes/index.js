var express = require('express');
var router = express.Router();
var Hobby = require('../models/hobby');


router.get('/', function (req, res, next) {
  Hobby.find({}, function (err, hobbies) {
    res.render('index', {
      hobbies,
      title: "Hobbies Page"
    })
  })
});

router.get('/detail/:id', function (req, res) {
  Hobby.findById({
    _id: req.params.id
  }, function (err, hobby) {
    res.render('show', {
      hobby,
    })
  })
});

router.post('/', function (req, res) {
  Hobby.create(req.body);
  res.redirect('/');
});

router.delete('/:id', function (req, res) {
  Hobby.findByIdAndDelete({
    _id: req.params.id
  }, function (err, hobby) {
    res.redirect('/');
  })
});

router.put('/:id', function (req, res) {
  Hobby.findById({
    _id: req.params.id
  }, function (err, hobby) {
    hobby.name = req.body.name
    hobby.description = req.body.description
    hobby.save(function (err) {
      res.redirect(`/detail/${hobby._id}`)
    })
  })
});


module.exports = router;