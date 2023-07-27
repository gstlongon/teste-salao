const mongoose = require('mongoose')
const Schema = mongoose.Schema

const servico = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    duracao: {
        type: Number,
        required: true,
    }, 
    descricao: {
        type: String,
        required: true,
    },


})

module.exports = mongoose.model('Servico', servico)