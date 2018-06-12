import data from './data.js'

const app = new Vue({
	el: '#app',
	data,
	methods: {
		clicked() {
			this.expenses.unshift({
				description: this.description,
				amount: this.amount,
				date: moment().format('MMMM Do, YYYY')
			})
			this.description = ''
			this.amount = ''
		}
	}
})

setTimeout(() => {
	app.message = 'Record an expense'
}, 3000)
