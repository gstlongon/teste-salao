const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const servico = require('../models/servico')
const Colaborador = require('../models/colaborador')
const Cliente = require('../models/cliente')
const Horario = require('../models/horario')
const Agendamento = require('../models/agendamento')

router.post('/', async (req, res) => {
    try {
        const agendamento = await new Agendamento(req.body).save()
        res.json({agendamento})

        const servicos = await servico.Servico.findById(servicoId)
        .select('titulo')

        const colaboradores = await colaborador.findById(colaboradorId)
            .select('recipientId')

        const existentAgendamento = await Agendamento.findOne({
            $and: [
                { salaoId: req.body.salaoId },
                { colaboradorId: req.body.colaboradorId },
                { data: req.body.data }
            ]
        })

        await session.commitTransaction()

        session.endSession()

        if (existentAgendamento) {
            res.json({ error: true, message: 'Agendamento já Cadastrado', existentAgendamento })
        } else {
            res.json({ message: 'Agendamento cadastrado com Sucesso', agendamento })
        }

    } catch (err) {
        res.json({error: true, message: err.message})
    }

}) 



module.exports = router