const express = require('express');
const router = express.Router();
const moment = require('moment');
const Horario = require('../models/horario');
const Colaborador = require('../models/colaborador');

router.get('/', async (req, res) => {
    try {
        const findEvents = await Horario.find();

        const events = findEvents.map(event => {
            return {
                _id: event._id,
                title: event.title, 
                start: event.start,
                end: event.end,
                description: event.description
            };
        });

    const colaboradores = await Colaborador.find({}, { _id: 1, nome: 1, email: 1, telefone: 1 });

    res.json({
      events,
      colaboradores: colaboradores
    });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;