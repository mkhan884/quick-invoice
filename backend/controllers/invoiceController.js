const invoiceService = require('../services/invoiceService')

exports.createInvoice = async (req, res) => {
    try{
        await invoiceService.createInvoice(req.db, req.body, req.user.id)
        return res.status(200).send({message: 'Successfully created an invoice'})
    }
    catch (err){
        return res.status(500).send({error: 'Unable to create an invoice'})
    }
}

exports.getInvoices = async (req,res) => {
    try{
        const invoices = await invoiceService.getInvoices(req.db, req.user.id)
        return res.status(200).send({message:"Successfully retreived all invoices", invoices: invoices})
    }
    catch{
        return res.status(500).send({error: "Unable to get invoies."})
    }
}

exports.changeStatus = async (req,res) =>{
    const invoice_id = req.params.invoice_id
    const status = req.body.status

    try{
        await invoiceService.changeStatus(req.db, invoice_id, status)
        return res.status(200).send({message: "Successfully updated the invoice status."})
    }
    catch{
        return res.status(500).send({error: 'Unable to change status of the invoice.'})
    }
}

exports.deleteInvoice = async (req,res) =>{
    const invoice_id = req.body.id;
    try{
        await invoiceService.deleteInvoice(req.db, invoice_id);
        return res.status(200).send({message: 'Successfully deleted invoice.'})
    }catch(err){
        return res.status(500).send({error: 'Unable to delete the invoice.'})
    }
}