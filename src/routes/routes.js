const router = require('express').Router();
const categoriesController = require('../controllers/Categories');
const labelsCtrontroller = require('../controllers/Labels');
const transactionsController = require('../controllers/transactions')


router.post('/api/categories', categoriesController.createCategories)
router.get('/api/categories', categoriesController.getCategories)

router.post('/api/transaction', transactionsController.createTransactions)
router.get('/api/transactions', transactionsController.getTransactions)
router.delete('/api/transaction', transactionsController.deleteTransaction)


router.get('/api/labels', labelsCtrontroller.getLabels)







module.exports = router