const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next){
    const token = req.headers['authorization']?.split(' ')[1]
    if(!token)
        return res.status(401).send({error: 'Token missing.'})

    jwt.verify(token, process.env.KEY, (err, user) => {
        if (err)
            return res.status(403).send({error: 'Forbidden.'})

        req.user = user // Attaching user.id from the token to the request. Middleware will authenticate routes.
        next()
    })
}

module.exports = authenticateToken