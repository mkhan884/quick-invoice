exports.getDashboardStats = (db, user_id) => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT 
                COUNT(*) as total_invoices,
                SUM(CASE WHEN status = 'paid' THEN 1 ELSE 0 END) as paid_invoices,
                SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending_invoices,
                SUM(CASE WHEN status = 'paid' THEN total ELSE 0 END) as total_revenue
            FROM invoices 
            WHERE user_id = ?`;

        db.query(query, [user_id], (err, result) => {
            if (err) {
                return reject(err);
            }
            const stats = {
                totalInvoices: result[0].total_invoices || 0,
                paidInvoices: result[0].paid_invoices || 0,
                pendingInvoices: result[0].pending_invoices || 0,
                totalRevenue: result[0].total_revenue || 0
            };
            
            resolve(stats);
        });
    });
} 