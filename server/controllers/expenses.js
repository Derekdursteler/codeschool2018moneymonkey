module.exports = {
	listExpenses: (req, res) => res.send('list expenses'),
	createExpense: (req, res) => res.send('created expense'),
	updateExpense: (req, res) => res.send('updated expense'),
	deleteExpense: (req, res) => res.send('deleted expense')
}