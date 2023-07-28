const express = require('express');
const router = express.Router();
const Servico = require('../models/servico');

router.get('/', async (req, res) => {
    try {
        const servicos = await Servico.find();

        const servicosLimpos = servicos.map(servico => {
            return {
                _id: servico._id,
                titulo: servico.nome,
                duracao: servico.email,
            };
        });

        res.json(servicosLimpos);
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;