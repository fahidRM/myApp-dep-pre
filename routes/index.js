var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/a', function (req, res, next) {

  const data = [
    {"name": "Apple", "price": 1.0}, 
    {"name": "Banana", "price": 0.25}
  ];

  res.json(data);


});

router.post('/api/b', function (req, res, next) {


  if (req.body.a) {
    const data = [
      {"name": "Apple 2", "price": 1.0}, 
      {"name": "Banana 2", "price": 0.25}
    ];
    res.json(data);
  } else {
    res.status(403).json({"message": "noooo"});
  }
  

  


});

module.exports = router;
