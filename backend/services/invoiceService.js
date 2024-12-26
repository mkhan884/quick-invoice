exports.createInvoice = (db, invoiceInfo) => {
        const baseQuery = 'INSERT INTO invoices';
        const keys = []
        const values = []
        const placeholders = []

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

