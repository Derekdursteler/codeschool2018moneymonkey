const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const expensesRouter = require('./routes/expenses')

app.use(bodyParser.json())
app.use(express.static(`${__dirname}/../client`))
app.use(morgan('tiny'))
app.use('/expenses', expensesRouter)

mongoose.connect('mongodb://localhost:27017/expenses')
	.then(() => {
		app.listen(3000)
	})
