const express = require ('express')
const router = express.Router()
const dotenv = require('dotenv');
dotenv.config()
const invoiceController = require('../controllers/invoiceController')

router.post('/create', invoiceController.createInvoice)

module.exports = router