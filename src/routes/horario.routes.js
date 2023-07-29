const express = require('express');
const moment = require('moment');
const router = express.Router();
const Horario = require('../models/horario');

router.post('/', async (req, res) => {
  try {
    const start = moment(req.body.start).toISOString();
    const end = moment(req.body.end).toISOString();

    const novoEvento = new Horario({
      start: start,
      end: end,
    });

    const horario = await novoEvento.save();

    res.json({ horario });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;