const express = require('express');
const router = express.Router();
const moment = require('moment');
const Horario = require('../models/horario');
const Colaborador = require('../models/colaborador');

router.get('/', async (req, res) => {
  try {
    const events = await Horario.find({
      start: {
        $gte: moment(req.query.start).toDate()
      },
      end: {
        $lte: moment(req.query.end).toDate()
      }
    });

    const colaboradores = await Colaborador.find({}, { _id: 1, nome: 1, email: 1, telefone: 1 });

    res.json({
      events: events,
      colaboradores: colaboradores
    });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;