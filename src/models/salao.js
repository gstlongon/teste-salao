const mongoose = require('mongoose')
const Schema = mongoose.Schema

const salao = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório.'],
    },
    email: {
        type: String,
        required: [true, 'E-mail é obrigatório.'],
    },
    senha: {
        type: String,
        required: [true, 'Senha é obrigatório.'],
    },
    telefone: {
        type: String,
        default: null,
    },

})

module.exports = mongoose.model('Salao', salao)