const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cliente = new Schema({
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
        required: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },

})

module.exports = mongoose.model('Cliente', Cliente)