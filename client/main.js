import data from './data.js'

const app = new Vue({
	el: '#app',
	data,
	watch: {
		description() {
			this.valid.description = true
		},
		amount() {
			this.valid.amount = true
		},
	},
	computed: {
		total() {
			// functional way
			return this.expenses
				.reduce((total, expense) =>
					total + expense.amount, 0)
		}
	},
	methods: {
		setEditingId(id) {
			this.expenseId = id
			const indexOfExpense = this.expenses.findIndex(expense => expense.id === id)

			this.description = this.expenses[indexOfExpense].description
			this.amount = this.expenses[indexOfExpense].amount.toLocaleString()

		},
		isValid() {
			this.valid = {
				description: Boolean(this.description),
				amount: this.amount !== '' && /^,!([0-9]{0,3})(,?([0-9]){3})*(\.[0-9]{0,2})?$/.test(this.amount)
			}

			for(const key in this.valid) {
				if (!this.valid[key]) {
					const refString = key + 'Ref'
					const ref = this.$refs[refString]
					ref.select()
					
					return false
				}
			}

			return true
		},
		saveExpense() {
			this.description = this.description.trim()
			this.amount = this.amount.trim()
			if (this.isValid()) {
				if (this.expenseId !== null) {
					console.log('updating')
					// we are editing an expense
					this.updateExpense(this.expenseId)

				} else {
					console.log('adding')
					// we are adding an expense
					this.addExpense()

				}
				this.description = ''
				this.amount = ''
				this.$refs.descriptionRef.focus()
			}
		},
		addExpense() {
			this.expenses.unshift({
					id: this.expenses.length + Math.random(),
					description: this.description,
					amount: Number(this.amount.replace(/,/g, '')),
					date: moment().format('MMMM Do, YYYY')
				})
		},
		updateExpense(id) {
			const indexOfExpense = this.expenses.findIndex(expense => expense.id === id)
			
			this.expenses.splice(indexOfExpense, 1, {
				id,
				description: this.description,
				amount: Number(this.amount.replace(/,/g, '')),
				date: moment().format('MMMM Do, YYYY')
			})

			this.expenseId = null
		},
		deleteExpense(id) {
			// functional way
			const indexOfExpense = this.expenses.findIndex(expense => expense.id === id)
			this.expenses.splice(indexOfExpense, 1)

			// imperative way
			/*for(let i = 0; i < this.expenses.length; i++) {
				if (this.expenses[i].id === id)
					this.expenses.splice(i, 1)
			}*/
			
		},
		clear() {
			this.description = ''
			this.amount = ''
		}
	}
})

setTimeout(() => {
	app.message = 'Record an expense'
}, 3000)
