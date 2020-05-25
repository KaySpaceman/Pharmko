var express = require('express');
var router = express.Router();
const products = require('../models/Product');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/aktuali', function(req, res, next) {
  res.render('aktuali', { title: 'Aktuali' });
});
router.get('/davanas', function(req, res, next) {
  res.render('davanas', { title: 'Davanas' });
});
router.get('/kontakti', function(req, res, next) {
  res.render('kontakti', { title: 'Kontakti' });
});
router.get('/loterija', function(req, res, next) {
  res.render('loterija', { title: 'Loterija' });
});
router.get('/parmums', function(req, res, next) {
  res.render('parmums', { title: 'Par Mums' });
});
router.get('/preces', async function(req, res, next) {
  const allProducts = await products.find({}).exec();

  res.render('preces', { title: 'Preces' , Products: allProducts });
});

module.exports = router;
