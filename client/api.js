const parseExpenses = () => {
	const expenses = localStorage.getItem('expenses') || '[]'
	const parsedExpenses = JSON.parse(expenses)
	return parsedExpenses
}

const setExpenses = expenses => {
	const stringifiedExpenses = JSON.stringify(expenses)
	localStorage.setItem('expenses', stringifiedExpenses)
}

const getExpenses = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const expenses = localStorage.getItem('expenses')
			resolve(expenses === null ? [] : JSON.parse(expenses))
		}, 5000)
	})
}

const addExpense = expense => {
	return new Promise((resolve, reject) => {
		const parsedExpenses = parseExpenses()
		parsedExpenses.unshift(expense)
		setExpenses(parsedExpenses)
		resolve(expense)
	})
}

const updateExpense = updatedExpense => {
	return new Promise((resolve, reject) => {
		const parsedExpenses = parseExpenses()
		const indexOfExpense = parsedExpenses.findIndex(expense => expense.id === updatedExpense.id)
		parsedExpenses.splice(indexOfExpense, 1, updatedExpense)
		setExpenses(parsedExpenses)
		resolve(updatedExpense)
	})
}

const deleteExpense = id => {
	return new Promise((resolve, reject) => {
		let parsedExpenses = parseExpenses()
		parsedExpenses = parsedExpenses.filter(expense => expense.id !== id)
		setExpenses(parsedExpenses)
		resolve()
	})
}

export default {
	getExpenses,
	addExpense,
	updateExpense,
	deleteExpense
}


















