const mongoose = require('mongoose');

const listingSchema =  new mongoose.Schema({
  title: 
  {type: String, required:true},
  description:{
    type: String
  },
  price: 
  {type: Number, required:true},
  category: {
    type: String
  },
  images: [String], 
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})

module.exports = mongoose.model('Listing', listingSchema);