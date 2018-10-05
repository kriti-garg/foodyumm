const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: String,
  rollNo: Number,
  phoneNo: Number,
  password: String,
  confirmPassword: String  
});
mongoose.model('users', userSchema);

