const express = require('express')
const router = express.Router()
const Horario = require('../models/horario')
const Colaborador = require('../models/colaborador')



router.post('/', async (req, res) => {
    try {
        const horario = await new Horario(req.body).save()
        res.json({ horario })
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})



module.exports = router