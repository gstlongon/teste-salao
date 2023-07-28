const mongoose = require('mongoose')
const Schema = mongoose.Schema

const horario = new Schema({
    colaboradorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },



})

module.exports = mongoose.model('Horario', horario)