const express = require ('express')
const router = express.Router()
// const dotenv = require('dotenv');
// dotenv.config()
const invoiceController = require('../controllers/invoiceController')
const authenticateToken = require('../helpers/jwtAuth')

router.post('/create', authenticateToken, invoiceController.createInvoice)
router.get('/get', authenticateToken, invoiceController.getInvoices)
router.patch('/changeStatus/:invoice_id', authenticateToken, invoiceController.changeStatus)
router.delete('/delete', authenticateToken, invoiceController.deleteInvoice)
router.put('/update', authenticateToken, invoiceController.updateInvoice)

module.exports = router