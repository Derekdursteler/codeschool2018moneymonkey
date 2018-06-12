import data from './data.js'

const app = new Vue({
	el: '#app',
	data,
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
				if (!this.valid[key])
					return false
			}

			return true
		},
		clicked() {
			if (this.isValid()) {
				this.expenses.unshift({
					description: this.description,
					amount: this.amount,
					date: moment().format('MMMM Do, YYYY')
				})
				this.description = ''
				this.amount = ''
			}

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
