const mongoose = require('mongoose')
const Schema = mongoose.Schema

const agendamento = new Schema({
    clienteId: {
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
        required: true,
    },
    servicoId: [
        {
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        required: true,
        },
    ],
    colaboradorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required: true,
    },
    data: {
        type: Date,
        required: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
    valor: {
        type: Number,
        required: true,
    },


})

module.exports = mongoose.model('Agendamento', agendamento)