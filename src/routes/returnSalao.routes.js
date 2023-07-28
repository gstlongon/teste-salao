const express = require('express');
const router = express.Router();
const Salao = require('../models/salao');

router.get('/', async (req, res) => {
    try {
        const salao = await Salao.find();

        const salaoLimpos = salao.map(salao => {
            return {
                _id: salao._id,
                nome: salao.nome,
                email: salao.email,
                senha: salao.senha
            };
        });

        res.json(salaoLimpos);
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;