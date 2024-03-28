const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema({
  id: {
    type: Number,
  },
  nombre: {
    type: String,
    required: true
  },
  metadata: {
    precios_especiales: {
      nombre_producto: { type: String },
      precio_especial_personal: { type: Number }
    }
  }
});

module.exports = mongoose.model('users', UsersSchema);