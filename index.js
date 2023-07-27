const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
require('./database')

//MIDDLEWARES
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false })) 
app.use(express.json())
app.use(cors()) 

//VARIABLES
app.set('port', 3000)

//ROTAS
app.use('/salao',require('./src/routes/salao.routes'))
app.use('/horario',require('./src/routes/horario.routes'))
app.use('/colaborador',require('./src/routes/colaborador.routes'))
app.use('/agendamento',require('./src/routes/agendamento.routes'))




app.listen(app.get('port'), () => {
    console.log(`WS escutando na porta ${app.get('port')}`)
}) 