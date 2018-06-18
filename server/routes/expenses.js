const express = require('express')
const router = express.Router()

const expenseController = require('../controllers/expenses')

// a get to '/expenses'
router.get('/', expenseController.listExpenses)

// export default router
module.exports = router