const moment = require('moment')
const Expense = require('../models/expenses')

module.exports = {
	listExpenses: (req, res, next) => {
		Expense.find(req.query)
			.then(expenses => res.json(expenses))
	},
	getExpense: (req, res, next) => {
		Expense.findById(req.params.id)
			.then(expense => res.json(expense))
	},
	createExpense: (req, res, next) => {
		Expense.create({
			description: req.body.description,
			amount: req.body.amount,
			quantity: req.body.quantity
		})
			.then(expense => res.status(201).json(expense))
			.catch(e => {
				req.error = e
				next()
			})
	},
	updateExpense: (req, res, next) => {
		Expense.findByIdAndUpdate(req.params.id, {
			description: req.body.description,
			amount: req.body.amount,
			quantity: req.body.quantity
		},
		{ new: true }
		)
			.then(expense => res.json(expense))
	},
	deleteExpense: (req, res, next) => {
		Expense.findByIdAndRemove(req.params.id)
			.then(() => res.status(204).send())
	},
}














