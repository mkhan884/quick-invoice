const invoiceService = require('../services/invoiceService')

exports.createInvoice = async (req, res) => {
    try{
        await invoiceService.createInvoice(req.db, req.body)
        return res.status(200).send({message: 'Successfully created an invoice'})
    }
    catch (err){
        return res.status(500).send({error: 'Unable to create an invoice'})
    }
}