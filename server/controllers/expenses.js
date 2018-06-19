const moment = require('moment')

module.exports = {
	listExpenses: (req, res) => res.json(expenses),
	createExpense: (req, res) => {
		const expense = {
			id: Math.random(),
			description: req.body.description,
			amount: req.body.amount,
			quantity: req.body.quantity,
			date: moment().format('MMMM Do, YYYY')
		}
		expenses.unshift(expense)
		res.status(201).send('created expense')
	},
	updateExpense: (req, res) => {
		const indexOfExpense = expenses.findIndex(expense => expense.id == req.params.id)
		const updatedExpense = {
			id: expenses[indexOfExpense].id,
			description: req.body.description,
			amount: req.body.amount,
			quantity: req.body.quantity,
			date: moment().format('MMMM Do, YYYY')
		}
		expenses.splice(indexOfExpense, 1, updatedExpense)
		res.json(updatedExpense)
	},
	deleteExpense: (req, res) => {
		expenses = expenses.filter(expense => expense.id != req.params.id)
		res.status(204).send()
	},
}
