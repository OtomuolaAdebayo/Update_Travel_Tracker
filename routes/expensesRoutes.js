const express = require('express')
const router = express.Router()

const { createExpenses,
        getExpenses,
        updateExpenses,
        deleteExpenses
      } = require('../controllers/expensesController')


router.post('/createexpenses', createExpenses)
router.get('/expensesdetail', getExpenses);
router.put('/updateexpense/:id', updateExpenses);
router.delete('/deleteexpenses/:id', deleteExpenses);


module.exports = router