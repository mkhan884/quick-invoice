const dashboardService = require('../services/dashboardService')

exports.getDashboardStats = async (req, res) => {
    try {
        const stats = await dashboardService.getDashboardStats(req.db, req.user.id)
        return res.status(200).send({
            message: "Successfully retrieved dashboard stats",
            stats: stats
        })
    } catch (err) {
        return res.status(500).send({error: "Unable to retrieve dashboard stats"})
    }
} 