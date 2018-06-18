const express = require('express')
const morgan = require('morgan')
const app = express()

const expensesRouter = require('./routes/expenses')

app.use(express.static(`${__dirname}/../client`))
app.use(morgan('tiny'))
app.use('/expenses', expensesRouter)
app.listen(3000)