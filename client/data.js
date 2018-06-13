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
		},
		{
			id: 3,
			amount: 29.99,
			description: 'Oil Change',
			date: moment().subtract(10, 'days').format('MMMM Do, YYYY')
		},
		{
			id: 25,
			amount: 29.99,
			description: 'Oil Change',
			date: moment().subtract(10, 'days').format('MMMM Do, YYYY')
		},
		{
			id: 255,
			amount: 29.99,
			description: 'Oil Change',
			date: moment().subtract(10, 'days').format('MMMM Do, YYYY')
		},
		{
			id: 2555,
			amount: 29.99,
			description: 'Oil Change',
			date: moment().subtract(10, 'days').format('MMMM Do, YYYY')
		},
		{
			id: 223,
			amount: 29.99,
			description: 'Oil Change',
			date: moment().subtract(10, 'days').format('MMMM Do, YYYY')
		},
		{
			id: 2555,
			amount: 29.99,
			description: 'Oil Change',
			date: moment().subtract(10, 'days').format('MMMM Do, YYYY')
		},
		{
			id: 232523,
			amount: 29.99,
			description: 'Oil Change',
			date: moment().subtract(10, 'days').format('MMMM Do, YYYY')
		},
		{
			id: 223523,
			amount: 29.99,
			description: 'Oil Change',
			date: moment().subtract(10, 'days').format('MMMM Do, YYYY')
		}
	]
}

export default data












