const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  precio_base: {
    type: Number,
    required: true
  },
  existencia: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('products', ProductSchema);