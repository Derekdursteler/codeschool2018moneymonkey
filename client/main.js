import data from './data.js'
import api from './api.js'

const app = new Vue({
	el: '#app',
	data,
	created() {
		api.getExpenses()
			.then(expenses => {
				this.expenses = expenses.reverse()
				this.loading = false
			})
			.catch(e => console.log(e))
	},
	watch: {
		description(val) {
			if (val !== '')
				this.valid.description = this.validDescription()
		},
		amount(val) {
			if (val !== '')
				this.valid.amount = this.validAmount()
		},
	},
	computed: {
		total() {
			// functional way
			return this.expenses
				.reduce((total, expense) =>
					total + expense.amount * expense.quantity, 0)
				.toLocaleString()
		},
		saveButtonText() {
			return this.expenseId === null ? 'Add Expense' : 'Update Expense'
		},
		clearButtonVisible() {
			if (this.description !== '' || this.amount !== '' || this.quantity !== '1' || this.expenseId !== null)
				return true
			else
				return false
		}
	},
	methods: {
		validAmount() {
			return this.amount !== '' && /^[^,]([0-9]{0,3})(,?([0-9]){3})*(\.[0-9]{0,2})?$/.test(this.amount)
		},
		validDescription() {
			return this.description !== ''
		},
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
				description: this.validDescription(),
				amount: this.validAmount(),
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
			api.deleteExpense(id)
				.then(() => this.expenses = this.expenses.filter(expense => expense._id !== id))
		},
		clear() {
			this.description = ''
			this.amount = ''
			this.quantity = '1'
			this.expenseId = null
			this.valid.description = true
			this.valid.amount = true
		}
	}
})

setTimeout(() => {
	app.message = 'Record an expense'
}, 3000)
