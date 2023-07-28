const express = require('express');
const router = express.Router();
const Colaborador = require('../models/colaborador');

router.get('/', async (req, res) => {
    try {
        const colaboradores = await Colaborador.find();

        const colaboradoresLimpos = colaboradores.map(colaborador => {
            return {
                _id: colaborador._id,
                nome: colaborador.nome,
                email: colaborador.email,
                telefone: colaborador.telefone
            };
        });

        res.json(colaboradoresLimpos);
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;