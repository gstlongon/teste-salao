const mongoose = require('mongoose')
const Schema = mongoose.Schema

const horario = new Schema({
    title: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
    },
    description: {
        type: String,
        required: true,
    },




})

module.exports = mongoose.model('Horario', horario)