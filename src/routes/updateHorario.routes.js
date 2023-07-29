const express = require('express');
const moment = require('moment');
const router = express.Router();
const Horario = require('../models/horario');

router.put('/', async (req, res) => {
  try {
    const start = moment(req.body.start).toDate();
    const end = moment(req.body.end).toDate();

    const horario = await Horario.findByIdAndUpdate(
      req.params.id, 
      {
        title: req.body.title,
        start: start,
        end: end,
        description: req.body.description
      },
      { new: true } 
    );

    res.json({ horario });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;