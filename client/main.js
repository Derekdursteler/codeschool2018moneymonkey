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
				.toFixed(2)
		}
	},
	methods: {
		isValid() {
			this.valid = {
				description: Boolean(this.description) ,
				amount: (
					Boolean(this.amount) &&
					(!isNaN(Number(this.amount)))
				)
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
		clicked() {
			if (this.isValid()) {
				this.expenses.unshift({
					id: this.expenses.length + Math.random(),
					description: this.description,
					amount: Number(this.amount),
					date: moment().format('MMMM Do, YYYY')
				})
				this.description = ''
				this.amount = ''
				this.$refs.descriptionRef.focus()
			}
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
