const mongoose = require('mongoose');

const MateriaSchema = new mongoose.Schema({
  nombre: String,
  profesor: String,
  tema: String
});

module.exports = mongoose.model('Materia', MateriaSchema);
