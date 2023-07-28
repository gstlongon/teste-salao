const express = require('express');
const router = express.Router();
const Horario = require('../models/horario');
const Colaborador = require('../models/colaborador')



router.get('/', async (req, res) => {
    try {
        const horario = await Horario.find({
                start: {
                    $gte: moment(req.query.start).toDate()
                },
                end: {
                    $lte: moment(req.query.end).toDate()
                }
            });

            res.send(horario)
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
}); 

module.exports = router;