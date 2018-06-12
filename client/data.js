const data = {
	message: 'Welcome!',
	description: '',
	amount: '',
	valid: {
		description: true,
		amount: true
	},
	expenses: [
		{
			amount: 15.06,
		 	description: 'Groceries',
		 	date: moment().subtract(1, 'days').format('MMMM Do, YYYY')
		},
		{
			amount: 10.99,
			description: 'Movie Ticket',
			date: moment().subtract(5, 'days').format('MMMM Do, YYYY')
		},
		{
			amount: 29.99,
			description: 'Oil Change',
			date: moment().subtract(10, 'days').format('MMMM Do, YYYY')
		}
	]
}

export default data












