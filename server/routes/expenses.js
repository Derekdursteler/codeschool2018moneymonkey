const express = require('express')
const router = express.Router()

const expenseController = require('../controllers/expenses')

// COLLECTION PATHS

// a get to '/expenses'
router.get('/', expenseController.listExpenses)
// a post to '/expenses'
router.post('/', expenseController.createExpense)


// ELEMENT PATHS

// a put to '/expenses/id'
router.put('/:id', expenseController.updateExpense)
// a delete to '/expenses/id'
router.delete('/:id', expenseController.deleteExpense)

// export default router
module.exports = router