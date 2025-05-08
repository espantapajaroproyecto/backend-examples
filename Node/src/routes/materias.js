const express = require('express');
const Materia = require('../models/Materia');
const router = express.Router();

router.get('/', async (req, res) => {
  const materias = await Materia.find();
  res.json(materias);
});

router.post('/', async (req, res) => {
  const materia = new Materia(req.body);
  await materia.save();
  res.status(201).json(materia);
});

module.exports = router;
