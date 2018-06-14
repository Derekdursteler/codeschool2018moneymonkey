const getExpenses = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{
					id: 0,
					amount: 15.06,
				 	description: 'Groceries',
				 	date: moment().subtract(1, 'days').format('MMMM Do, YYYY')
				},
				{
					id: 1,
					amount: 10.99,
					description: 'Movie Ticket',
					date: moment().subtract(5, 'days').format('MMMM Do, YYYY')
				}
			])
		}, 5000)
	})
}

export default {
	getExpenses
}
