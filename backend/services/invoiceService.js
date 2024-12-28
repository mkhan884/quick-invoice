
exports.createInvoice = (db, invoiceInfo, user_id) => {
        const baseQuery = 'INSERT INTO invoices';
        const keys = []
        const values = []
        const placeholders = []
        keys.push("user_id")
        values.push(user_id)
        placeholders.push('?')

        for(const [key, value] of Object.entries(invoiceInfo)){
            if(value !== undefined && value !== null && value !== ''){
                keys.push(key)
                values.push(value)
                placeholders.push('?')
            }
        }
        if(keys.length === 0){
            throw new Error('No valid fields provided for the invoice')
        }
        const query = `${baseQuery} (${keys.join(', ')}) VALUES (${placeholders.join(', ')})`

        return new Promise ((resolve, reject) =>{
            db.query(query, values, async (err, result) =>{
                if(err){
                   return reject(err)
                }
                resolve(result)
            })
        })
        
    }

exports.getInvoices = (db, user_id) => {
    return new Promise((resolve, reject) =>{
        db.query(`SELECT id, invoice_number, invoice_date, bill_from_name, bill_from_address, 
            bill_from_city, bill_from_country, bill_from_phone_number, bill_to_name, 
            bill_to_address, bill_to_city, bill_to_country, bill_to_phone_number, description, 
            quantity, rate, total, currency, notes, status FROM invoices WHERE user_id = ?`, [user_id], (err, result) => {
            
            if(err){
                return reject()
            }
            resolve(result)
        })
    })
}

exports.changeStatus = (db, invoice_id, status) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE invoices SET status = ? WHERE id = ?', [status, invoice_id], (err, result) =>{
            if(err){
                return reject()
            }
            resolve()
        })
    })
}