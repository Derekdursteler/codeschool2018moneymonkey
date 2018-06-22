import data from './data.js'
import api from './api.js'

const app = new Vue({
	el: '#app',
	data,
	created() {
		api.getExpenses()
			.then(expenses => this.expenses = expenses)
			.catch(e => console.log(e))
	},
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
					total + expense.amount * expense.quantity, 0)
				.toLocaleString()
		}
	},
	methods: {
		setEditingId(id) {
			this.expenseId = id
			const indexOfExpense = this.expenses.findIndex(expense => expense._id === id)
			const expense = this.expenses[indexOfExpense]

			this.description = expense.description
			this.amount = expense.amount.toLocaleString()
			this.quantity = expense.quantity

		},
		isValid() {
			this.valid = {
				description: Boolean(this.description),
				amount: this.amount !== '' && /^[^,]([0-9]{0,3})(,?([0-9]){3})*(\.[0-9]{0,2})?$/.test(this.amount)
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
				this.quantity = '1'
				this.$refs.descriptionRef.focus()
			}
		},
		addExpense() {
			const expense = {
				description: this.description,
				amount: Number(this.amount.replace(/,/g, '')),
				quantity: Number(this.quantity),
			}
			api.addExpense(expense)
				.then(expense => this.expenses.unshift(expense))
				.catch(e => console.log(e))
		},
		updateExpense(id) {
			const updatedExpense = {
				_id: id,
				description: this.description,
				amount: Number(this.amount.replace(/,/g, '')),
				quantity: Number(this.quantity),
			}

			api.updateExpense(updatedExpense)
				.then(expense => {
					const indexOfExpense = this.expenses.findIndex(expense => expense._id === id)
					this.expenses.splice(indexOfExpense, 1, expense)
					this.expenseId = null
				})
		},
		deleteExpense(id) {
			// functional way

			api.deleteExpense(id)
				.then(() => this.expenses = this.expenses.filter(expense => expense._id !== id))


			// imperative way
			/*for(let i = 0; i < this.expenses.length; i++) {
				if (this.expenses[i].id === id)
					this.expenses.splice(i, 1)
			}*/
			
		},
		clear() {
			this.description = ''
			this.amount = ''
			this.quantity = '1'
			this.valid.description = true
			this.valid.amount = true
		}
	}
})

setTimeout(() => {
	app.message = 'Record an expense'
}, 3000)
