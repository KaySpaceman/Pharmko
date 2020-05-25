var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/newProduct', { title: 'Add New Product' });
});

router.post('/save', function(req, res, next) {
  const body = req.body;
  const newProduct = new Product(body);

  newProduct._id = new mongoose.Types.ObjectId();

  newProduct.save().then(() => {
    res.redirect('/preces');
  })

});

module.exports = router;
