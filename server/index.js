const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

const expensesRouter = require('./routes/expenses')

global.expenses = []

app.use(bodyParser.json())
app.use(express.static(`${__dirname}/../client`))
app.use(morgan('tiny'))
app.use('/expenses', expensesRouter)
app.listen(3000)