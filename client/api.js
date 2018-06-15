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
		const expenses = localStorage.getItem('expenses') || '[]'
		const parsedExpenses = JSON.parse(expenses)
		parsedExpenses.unshift(expense)
		const stringifiedExpenses = JSON.stringify(parsedExpenses)
		localStorage.setItem('expenses', stringifiedExpenses)
		resolve(expense)
	})
}	

export default {
	getExpenses,
	addExpense
}
