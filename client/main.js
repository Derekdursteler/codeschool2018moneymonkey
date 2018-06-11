const app = new Vue({
	el: '#app',
	data,
})

setTimeout(() => {
	app.message = 'Record an expense'
}, 3000)