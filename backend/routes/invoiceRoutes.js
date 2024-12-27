const express = require ('express')
const router = express.Router()
const dotenv = require('dotenv');
dotenv.config()
const invoiceController = require('../controllers/invoiceController')
const authenticateToken = require('../helpers/jwtAuth')

router.post('/create', authenticateToken, invoiceController.createInvoice)
router.get('/get', authenticateToken, invoiceController.getInvoices)
router.patch('/changeStatus/:invoice_id', authenticateToken, invoiceController.changeStatus)

module.exports = router