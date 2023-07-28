const mongoose = require('mongoose')
const Schema = mongoose.Schema

const horario = new Schema({
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