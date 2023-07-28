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
app.set('port', 8080)

//ROTAS
app.use('/salao',require('./src/routes/salao.routes'))
app.use('/horario',require('./src/routes/horario.routes'))
app.use('/colaborador',require('./src/routes/colaborador.routes'))
app.use('/agendamento',require('./src/routes/agendamento.routes'))
app.use('/return-colaborador',require('./src/routes/returnColaborador.routes'))
app.use('/return-servico',require('./src/routes/returnServico.routes'))
app.use('/return-salao',require('./src/routes/returnSalao.routes'))
app.use('/return-horario',require('./src/routes/returnHorario.routes'))




app.listen(app.get('port'), () => {
    console.log(`WS escutando na porta ${app.get('port')}`)
}) 