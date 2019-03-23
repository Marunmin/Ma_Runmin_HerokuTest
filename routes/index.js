var express = require('express');
var router = express.Router();

const data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Introduce the LEXUS', Photo_image: "CT.png", user_3page: "Is.png", user_4page: "Le.png", message: 'Express is actually pretty easy once you figure a few things out',

    });
});

//get a dynamic user via the route parameter
router.get('/:user', function(req, res, next) {
  console.log('user:', data[req.params.user]);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
