module.exports = {
	listExpenses: (req, res) => res.json(expenses),
	createExpense: (req, res) => {
		console.log(req.body)
		res.status(201).send('created expense')
	},
	updateExpense: (req, res) => res.send('updated expense'),
	deleteExpense: (req, res) => res.status(204)
}
