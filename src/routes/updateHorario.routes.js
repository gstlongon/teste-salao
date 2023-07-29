const express = require('express');
const moment = require('moment');
const router = express.Router();
const Horario = require('../models/horario');

router.put('/', async (req, res) => {
  try {
    const start = moment(req.body.start).format(); 
    const end = moment(req.body.end).format(); 

    const novoEvento = new Horario({
        title: req.body.title,  
        start: start,
        end: end,
        description: req.body.description
    });

    const horario = await novoEvento.save();

    res.json({ horario });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;