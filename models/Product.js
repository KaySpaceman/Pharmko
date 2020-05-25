const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  Title: String,
  Desc: String,
  Price: Number,
  PriceOld: Number,
  ImageUrl: String,
});

module.exports = mongoose.model('Product', productSchema, 'Products');
