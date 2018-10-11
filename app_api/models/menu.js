const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  itemId: Number,
  itemName: String,
  franchiseName: String,
  itemType: String,
  itemPrice: Number
});
mongoose.model('menu', menuSchema);

