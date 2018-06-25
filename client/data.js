const data = {
	message: 'Welcome!',
	description: '',
	amount: '',
	quantity: '1',
	expenseId: null,
	valid: {
		description: true,
		amount: true
	},
	expenses: [],
	headers: [
	{
		text: 'Selected',
		align: 'left',
		sortable: false,
	},
	{
		text: 'Description',
		align: 'left',
		sortable: false,
		value: 'description'
	},
	{
		text: 'Amount',
		align: 'left',
		sortable: true,
		value: 'amount'
	},
	{
		text: 'QTY',
		align: 'left',
		sortable: true,
		value: 'quantity'
	},
	{
		text: 'Date',
		align: 'left',
		sortable: true,
		value: 'date'
	},
	{
		text: 'Actions',
		align: 'left',
		value: ''
	},
	]
}

export default data












