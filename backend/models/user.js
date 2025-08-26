const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: 
   { type: String,required: true },
  email:
   { type: String, required: true, unique: true },
  password:
   { type: String, required: true }, // hashed
  phone:
   { type: String },
  profilePic:
   { type: String },
    sold :
    {type: Boolean, default:false}
});

module.exports = mongoose.model('User', userSchema);