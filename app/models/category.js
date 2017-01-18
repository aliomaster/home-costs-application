var mongoose =require('mongoose');

var categoryShema = mongoose.Schema({
  title: String,
  slug: String
});

var Category = mongoose.model('Category', categoryShema);
module.exports = Category;

