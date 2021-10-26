var express = require('express');
var router = express.Router();
var {Fruit} =  require('../models/fruits');

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

router.post('/api/b', async(req, res) => {

  const fruit = new Fruit({
      name: req.body.name,
      price: req.body.price
  });
  await fruit.save();
  res.send(fruit);

});


module.exports = router;
